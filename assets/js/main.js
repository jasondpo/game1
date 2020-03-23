
var myRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var n;
var ans;
var i;
var layer = "";

//Reduces number of peices after every click
function theNumber() {
    n = Math.floor((Math.random() * myRandom.length) + 1)
    ans = myRandom.splice($.inArray(n, myRandom), 1);
    $("#num").val(ans);
    $("[data-piece~=" + ans + "]").fadeOut();
    smartGauge()
}


function loadLayers() {
    for (i = 0; i < myRandom.length; i++) {
        layer += '<div style="background-image:url(assets/images/puzzle/pp' + myRandom[i] + '.png)" class="puzzleLayer" data-piece=' + myRandom[i] + '></div>';
    }
    $(".puzzleLayerContainer").html(layer)
}
loadLayers()


function featuredImage() {
    $(".imageContainer").css('background-image', 'url(assets/images/faces/idris_elba.png)')
}
featuredImage();


////////// Keyboard Controls START ////////// 

// controls for piece, solve and quit
$(document).on("keydown", function (event) {
    if (event.which == 80) { //P
        theNumber();
        chime();
    } if (event.which == 83) { // S
        $(".solveBox, .overlay").toggle();
        setTimeout(function () { $("#solveField").focus(); }, 100)
    } if (event.which == 81) { // Q
        alert("Quit");
    }
});



/////////// controls for clue START
$(document).on("keydown", function (event) {
    if (event.which == 67) { //C
        showHint();
    }
});
$(document).on("keyup", function (event) {
    if (event.which == 67) { //C
        $(".hintBox, .overlay").hide();
    }
});

function showHint() {
    var piecesLeft = myRandom.length - 6;
    if (myRandom.length == 6) {
        $(".hintBox, .overlay").show();
    } else {
        $(".hintBox").show().html("<h12>You must remove <span>" + piecesLeft + "</span> more pieces to recieve the clue.</h12>");
        $(".overlay").show();
    }
}
//////////// controls for clue END

////////// Keyboard Controls END ////////// 


//////////// Regular Click Navigation STARTS //////////// 

$(".remove").click(function () {
    theNumber();
})

$(".solve").click(function () {
    $(".solveBox, .overlay").toggle();
    setTimeout(function () { $("#solveField").focus(); }, 100)
})

var cHint = false
$(".hint").click(function () {
    if (cHint == false) {
        showHint();
        cHint = true
    } else {
        $(".hintBox, .overlay").hide();
        cHint = false
    }
})
//////////// Regular Click Navigation ENDS //////////// 


var audio = new Audio('assets/sound/hit.mp3');
function chime() {
    audio.play();
}

/// Smart Dumb Meter Player
var audioLose = new Audio('assets/sound/youLose.mp3');
function smartGauge() {
    resetSmartGauge();
    if (myRandom.length >= 14) {
        $(".dot1").addClass("dotActive");
    }
    if (myRandom.length <= 13 && myRandom.length >= 12) {
        $(".dot2").addClass("dotActive");
    }
    if (myRandom.length <= 11 && myRandom.length >= 10) {
        $(".dot3").addClass("dotActive");
    }
    if (myRandom.length <= 9 && myRandom.length >= 8) {
        $(".dot4").addClass("dotActive");
    }
    if (myRandom.length <= 7 && myRandom.length >= 6) {
        $(".dot5").addClass("dotActive");
    } if (myRandom.length <= 5) {
        $(".dot5").addClass("dotActive");
        audioLose.play();
    }

}

function resetSmartGauge() {
    for (i = 0; i < 17; i++) {
        $(".dot" + [i]).removeClass("dotActive");
    }
}

/// Smart Dumb Meter Faces
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
    sc = Math.floor((Math.random() * 5) + 1)
    dc = Math.floor((Math.random() * 5) + 1)
    $(".rightTopFace").css('background-image', 'url(assets/images/smart/' + smartCelebs[sc - 1] + ')')
    $(".rightBottomFace").css('background-image', 'url(assets/images/dumb/' + dumbCelebs[dc - 1] + ')')
}
randomCelebs();

