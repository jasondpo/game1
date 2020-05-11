import { resetForNextRound, cntPieces } from './main.js';
import { tallyScore, actualScore } from './score.js';

//Removes curtain overlay/starts game on click
$(".navBtnGroup").click(function () {
    dehighlight();
    $('.messageBubbleContainer').css('opacity', '1');
    $('.overlayCurtain').fadeOut('slow');
    $(this).find('.btnCategory').addClass("btnCategoryActive");
    $(this).find('.arrow-down').show();
    $("h23").html($(this).find('h21').html() + ":");
})

function dehighlight() {
    $(".btnCategory").each(function () {
        $('.messageBubbleContainer').hide();
        $(this).removeClass("btnCategoryActive");
        $('.arrow-down').hide();
    })
}

// Select topic and choose filter
const rand = Math.floor((Math.random() * 10000) + 1);
let bestTime = false;
var theTopic;
let filter = '';



$(".navBtnGroup").click(function () {
    const rand = Math.floor((Math.random() * 10000) + 1);

    if ($(this).hasClass('people')) {
        theTopic = "people"
        $(".playerList").load("leaderboards/load-people.php" + "#" + rand);
    }
    if ($(this).hasClass('vintage')) {
        theTopic = "vintage"
        $(".playerList").load("leaderboards/load-vintage.php" + "#" + rand);
    }
    if ($(this).hasClass('cartoons')) {
        theTopic = "cartoons"
        $(".playerList").load("leaderboards/load-cartoons.php" + "#" + rand);
    }
    if ($(this).hasClass('jcco')) {
        theTopic = "jcco"
        $(".playerList").load("leaderboards/load-jcco.php" + "#" + rand);
    }
});


$('.topPlayersSpacer').click(function () {
    if (bestTime == false) {
        bestTime = true;
        filter = 'time';
    } else {
        bestTime = false;
        filter = 'score';
    }
    $(".playerList").load("leaderboards/load-" + theTopic + ".php" + "#" + rand, {
        filter: filter
    });
})


// Show description on hover
$(".navBtnGroup").mouseover(function () {
    $(".pinkArrowDown").removeClass('pinkArrowDownActive').hide();
    $("h27").hide();
    $("h26").fadeIn();
    if ($(this).hasClass('people')) {
        $("h26 span").html(" Celebrities • Characters • Local");
    }
    if ($(this).hasClass('vintage')) {
        $("h26 span").html(" Defunct Products • Shuttered Businesses");
    }
    if ($(this).hasClass('cartoons')) {
        $("h26 span").html(" Comics • Manga • CGI • Traditional");
    }
    if ($(this).hasClass('jcco')) {
        $("h26 span").html(" Coworkers • Office Items • Buildings");
    }
});

// Return to clicked description on mouseout
var content = null;
$(document).on('mouseout', '#btmNav li', function () {
    if (content != null) {
        $('h26').html('Includes:<span>' + content + '</span>');
    } else {
        $('h26').hide()
    }
})

$(document).on('click', '#btmNav li', function () {
    content = $('h26 span').html();
})

//////////////////// MAIN LOGIC STARTS ////////////////////

var x = 1;
var category = "";
var theAns = "";
var gameLength = "";
var round = 1;


$(".navBtnGroup").click(function () {
    if ($(this).hasClass('people')) {
        category = "0";
    }
    if ($(this).hasClass('vintage')) {
        category = "1"
    }
    if ($(this).hasClass('cartoons')) {
        category = "2"
    }
    if ($(this).hasClass('jcco')) {
        category = "3"
    }
    startgame(category, 'false');
    resetForNewGame(category);
    x = 1
});

function startgame(category, status) {
    var puzzleData = JSON.parse(puzzle);
    gameLength = Object.keys(puzzleData[0][category]).length;
    if (status == 'true') { x++ };
    var gl = parseInt(gameLength)
    if (x > gl) {
        alert('Show stats')
    } else {
        var gamePic = puzzleData[0][category]["game" + x].image;
        $(".imageContainer").css('background-image', gamePic);
        $("#hintContainer").html(puzzleData[0][category]["game" + x].hint);
    }
}

// Retrieve acceptable answers
var theAns = "";
$('#userAnsForm').submit(function (e) {
    e.preventDefault();
    var obj = JSON.parse(puzzle);
    theAns = obj[0][category]["game" + x].answers;
    compareAns();
})

function compareAns() {
    var myAns = $('#solveField').val();
    var n = theAns.includes(myAns);
    if (n == true) {
        winLose('win');
    } else {
        winLose('lose');
        scorePenalty();
    }
    startgame(category, 'true');
    resetForNextRound();
    round++
    $("h28 span").html(round + "/4");
}

var lose = 0;
var win = 0;
function winLose(this_instance) {
    if (this_instance == "lose") {
        lose++
        $('h29 span').html(win + "-" + lose)
    }
    if (this_instance == "win") {
        win++
        $('h29 span').html(win + "-" + lose)
    }
}

function scorePenalty() {
    var ts = 0;
    var penalty = setInterval(function () {
        ts++
        if (ts >= cntPieces() + 1) { clearInterval(penalty); ts = 0 }
        tallyScore()
    }, 50);
}

/// Reset for new game 
function resetForNewGame(this_instance) {
    if (actualScore() <= 99 && $(".overlayCurtain").is(":hidden") && cntPieces() <= 24) {
        resetForNextRound();
        window.location.href = "main.php#" + this_instance;
        location.reload();
    }
}

// Check for category in URL string on page load
function setGameBySuperGlobal() {
    var gcat = "";
    const rand = Math.floor((Math.random() * 10000) + 1);
    var url = window.location.href;
    var tabId = url.split("#").pop();
    if (tabId == 0) { gcat = 'people' }
    if (tabId == 1) { gcat = 'vintage' }
    if (tabId == 2) { gcat = 'cartoons' }
    if (tabId == 3) { gcat = 'jcco' }
    if (tabId != '') {
        $(".playerList").load("leaderboards/load-" + gcat + ".php" + "#" + rand, {
            filter: filter
        });
        startgame(tabId, 'false');
        $("h27").hide();
        $(".overlayCurtain").hide();
        dehighlight();
        $(".pinkArrowDown").removeClass('pinkArrowDownActive').hide();
        $('#btmNav .' + gcat + '').find('.btnCategory').addClass("btnCategoryActive");
        $('#btmNav .' + gcat + '').find('.arrow-down').show();
    }
}
setGameBySuperGlobal();
//////////////////// MAIN LOGIC ENDS ////////////////////