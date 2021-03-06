$(".move-area, .dotStyle, .rightTopFace,  .rightBottomFace, .puzzleLayerContainer, .puzzleLayer, .navBtn, .leaderboard, header").mousemove(function (event) {
    var eye = $(".eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});

// Makes eyes blink
setInterval(function () {
    blink()
}, 200);

let x = 0;

function blink() {
    x++
    if (x == 30) {
        $('.eye').css("opacity", "0");
    }
    if (x == 31) {
        $('.eye').css("opacity", "1");
        x = 0
    }
}

///// Eyes disappear when cursor is innactive

let eyesActive = setTimeout(function () {
    $('.eye, .glasses, .eyes-container, .cursor, .messageBubbleContainer, h26 ').fadeOut();
}, 10000);

$(".rightTopFace, .rightBottomFace, .stopWatch, .quitBtn, .dotActive, #LogoutBtn").mouseover(function (e) {
    clearTimeout(eyesActive);
    fadeInEyes();
    fadeOutEyes();
});

export function fadeInEyes(){
     $('.eye, .glasses, .eyes-container, .cursor, .messageBubbleContainer').fadeIn();  
}
export function fadeOutEyes(){
    eyesActive = setTimeout(function () {
        $('.glasses, .eye, .eyes-container, .cursor, .messageBubbleContainer, h26 ').fadeOut();
    }, 10000);  
}
export function closeEyes(){
    $('.glasses, .eye, .eyes-container, .cursor, .messageBubbleContainer, h26 ').hide();
}

/// Red cursor move
let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

/// Red cursor grows
let navLinks = document.querySelectorAll(".grow");
navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
});


////// Eyes turn colors
$(document).on('mouseover', '.dotActive', function (e) {
    $(".eye").addClass("blue");
});
$(document).on('mouseleave', '.dotActive', function (e) {
    $(".eye").removeClass("blue");
});

$(".navBtn").mouseover(function () {
    $(".eye").addClass("red");
});
$(".navBtn").mouseleave(function () {
    $(".eye").removeClass("red");
});


//// Computer Voice Sound Effects for eyes  ///////
var audio1 = new Audio('assets/sound/computerVoice1.mp3');
var audio2 = new Audio('assets/sound/computerVoice2.mp3');
export function computerVoice(this_instance) {
    if (this_instance == "voice1") {
        audio1.play();
    } else {
        audio2.play();
    }
}