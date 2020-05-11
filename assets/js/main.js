import { stopWatch } from './stopWatch.js';
import { computerVoice, fadeInEyes, closeEyes } from './eyes.js';
import { startTimer, resetBeginScoring } from './score.js';


var myRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
var n;
var ans;
var i;
var layer = "";
var piecesLeft = "";

//Reduces number of peices after every click
function theNumber() {
    n = Math.floor((Math.random() * myRandom.length) + 1)
    ans = myRandom.splice($.inArray(n, myRandom), 1);
    $("#num").val(ans);
    $("[data-piece~=" + ans + "]").fadeOut();
    smartGauge()
    piecesLeft = myRandom.length;
    cntPieces();
}

export function cntPieces(this_instance) {
    if (piecesLeft == "" || piecesLeft == "reset") { piecesLeft = 25 }
    return piecesLeft; // for score penalty and resetForNewGame()
}

function loadLayers() {
    for (i = 0; i < myRandom.length; i++) {
        layer += '<div style="background-image:url(assets/images/puzzle/pp' + myRandom[i] + '.png),url(assets/images/puzzle/pp' + myRandom[i] + 's.png)" class="puzzleLayer" data-piece=' + myRandom[i] + '></div>';
    }
    $(".puzzleLayerContainer").html(layer)
}
loadLayers()


////////// Keyboard Controls START ////////// 
$(".overlay").click(function () {
    $(".solveBox, .quitBox, .overlay").hide();
    $("#solveField").val('');
})

// Controls for piece, solve and quit
$(document).on("keydown", function (event) {
    if (event.which == 80 && $("#solveField").is(':hidden') && $(".overlayCurtain").is(':hidden')) { //P
        theNumber();
        chime();
    } if (event.which == 83 && $("#solveField").is(':hidden') && $(".overlayCurtain").is(':hidden')) { // S
        $(".solveBox, .overlay").show();
        setTimeout(function () { $("#solveField").focus(); }, 100)
    } if (event.which == 81 && $("#solveField").is(':hidden')) { // Q
        $(".overlay, .quitBox").toggle();
    }
});

////////////////// GoBtn //////////////////
$(document).keydown(function (e) {
    if (e.which == 71 && $("#solveField").is(':hidden') && $(".overlayCurtain").is(':hidden')) { // G
        goBtn('run');
    }
});
$(document).keyup(function (e) {
    if (e.which == 71 && $("#solveField").is(':hidden')) { //G
        goBtn('stop');
    }
});

function goBtn(this_instance) {
    if (this_instance == "run") {
        $(".imageContainer").addClass("animeBoxPlay");
        $(".puzzleLayerContainer").addClass("imageContainerStopFloat");
        $(".stopWatch").css('z-index', '0');
        $(".darkScreen").addClass("darkScreenActive");
        $(".eyes-container, .glasses").css("margin", "-100px 0px 0px -45px")
    } if (this_instance == "stop") {
        $(".imageContainer").removeClass("animeBoxPlay");
        $(".puzzleLayerContainer").removeClass("imageContainerStopFloat");
        $(".darkScreen").removeClass("darkScreenActive");
        $(".stopWatch").css('z-index', '');
        $(".eyes-container, .glasses ").css("margin", "");
    }
}

/////////// Controls for clue START
$(document).on("keydown", function (event) {
    if (event.which == 67 && $("#solveField").is(':hidden') && $(".overlayCurtain").is(':hidden')) { //C
        showHint();
    }
});
$(document).on("keyup", function (event) {
    if (event.which == 67 && $("#solveField").is(':hidden') && $(".overlayCurtain").is(':hidden')) { //C
        $(".hintBox, .overlay").hide();
    }
});

function showHint() {
    var piecesLeft = myRandom.length - 14;
    if (myRandom.length == 14) {
        $(".hintBox, .overlay").show().html("The clue is...");
    } else {
        $(".hintBox").show().html("<h12>You must remove <span>" + piecesLeft + "</span> more pieces to recieve the clue.</h12>");
        $(".overlay").show();
    }
}
//////////// controls for clue END


/// Hover over main controls
$(".remove").mouseover(function () {
    $("h24").html("Remove Piece (Press P)");
})
$(".hint").mouseover(function () {
    $("h24").html("Clue (Hold C)");
})
$(".solve").mouseover(function () {
    $("h24").html("Solve (Press S)");
})
$(".go").mouseover(function () {
    $("h24").html("Play (Hold G)");
})
$(".quit").mouseover(function () {
    $("h24").html("Quit (Press Q)");
    computerVoice('voice1');
    $('.messageBubble h22').html("Don't you dare quit on me!")
})
$(".remove, .quit, .hint, .solve, .go").mouseout(function () {
    $("h24").html("");
})


//////////// Regular Click Controls STARTS //////////// 

$(".remove").click(function () {
    theNumber();
    chime();
    startTimer();
})

$(".goBtn").mousedown(function () {
    goBtn('run');
})
$(".goBtn").mouseup(function () {
    goBtn('stop');
})

$(".solve").click(function () {
    $("#solveField").val('');
    $(".solveBox, .overlay").toggle();
    setTimeout(function () { $("#solveField").focus(); }, 100)
})

$(".hint").mousedown(function () {
    showHint();
})

$(".hint").mouseup(function () {
    $(".hintBox, .overlay").hide();
})
$(".quitBtn").click(function () {
    $(".overlay, .quitBox").toggle();
})
$("#yesBtn").click(function () {
    location.reload();
})
$("#noBtn").click(function () {
    $(".overlay, .quitBox").hide();
})
//////////// Regular Click Controls ENDS //////////// 


var audio = new Audio('assets/sound/hit.mp3');
function chime() {
    audio.play();
}

/// Smart Dumb Meter Player and 'YOU LOSE' audio
var audioLose = new Audio('assets/sound/youLose.mp3');
function smartGauge() {
    resetSmartGauge();
    if (myRandom.length >= 22) {
        $(".dot1").addClass("dotActive");
    }
    if (myRandom.length <= 21 && myRandom.length >= 20) {
        $(".dot2").addClass("dotActive");
    }
    if (myRandom.length <= 19 && myRandom.length >= 18) {
        $(".dot3").addClass("dotActive");
    }
    if (myRandom.length <= 17 && myRandom.length >= 16) {
        $(".dot4").addClass("dotActive");
    }
    if (myRandom.length <= 15 && myRandom.length >= 14) {
        $(".dot5").addClass("dotActive");
    } if (myRandom.length <= 13) {
        $(".dot5").addClass("dotActive");
        audioLose.play();
        $(".stopWatch").removeClass('stopWatchGo div');
        stopWatch(); // From stopWatch.js
    }

}

function resetSmartGauge() {
    for (i = 0; i < 17; i++) {
        $(".dot" + [i]).removeClass("dotActive");
    }
}

///// Smart Dumb Meter Faces //////
var sc;
var dc;

var smartCelebs = [
    'alexandria.jpg',
    'cornel.jpg',
    'mark.jpg',
    'neil.jpg',
    'ayanna.png'
]

var dumbCelebs = [
    '69.jpg',
    'kanye.jpg',
    'paris.jpg',
    'flava.png',
    'kim.png'
]

function randomCelebs() {
    sc = Math.floor((Math.random() * 5) + 1);
    dc = Math.floor((Math.random() * 5) + 1);
    $(".rightTopFace").css('background-image', 'url(assets/images/smart/' + smartCelebs[sc - 1] + ')');
    $(".rightBottomFace").css('background-image', 'url(assets/images/dumb/' + dumbCelebs[dc - 1] + ')');
}
randomCelebs();

///// Smart Dumb Meter voice on rollover
$('.rightTopFace, .rightBottomFace').mouseover(function () {
    computerVoice('voice1');
})
$('.dotStyle').mouseover(function () {
    closeEyes();
    var dotColor = $(this).css('background-color');
    if (dotColor == "rgb(0, 173, 239)") {
        computerVoice('voice2');
        fadeInEyes();
    };
})


//////////////////// Reset for next round ////////////////////

export function resetForNextRound() {
    myRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    resetSmartGauge();
    n;
    ans;
    i;
    layer = "";
    loadLayers();
    resetBeginScoringSource()
    piecesLeft = 25;
    cntPieces('reset');
}

export function resetBeginScoringSource() {
    resetBeginScoring()
}



