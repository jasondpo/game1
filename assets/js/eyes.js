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
    $('.eye, .glasses, .eyes-container, .cursor, .messageBubbleContainer ').fadeOut();
}, 10000);

$(window).mousemove(function (e) {
    clearTimeout(eyesActive);
    $('.eye, .glasses, .eyes-container, .cursor, .messageBubbleContainer ').fadeIn();
    eyesActive = setTimeout(function () {
        $('.glasses, .eye, .eyes-container, .cursor, .messageBubbleContainer ').fadeOut();
    }, 10000);
});


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


// Start stopwatch animation on page load
function startTimer() {
    $('.stopWatch').css("background-image", "url(assets/images/watch/stopWatch1.png)");
    var timer = 1;
    mainTimer = setInterval(function () {
        timer++
        if (timer == 1) {
            $('.stopWatch').css("background-image", "url(assets/images/watch/stopWatch1.png)");
        } if (timer == 2) {
            $('.stopWatch').css("background-image", "url(assets/images/watch/stopWatch2.png)");
        } if (timer == 3) {
            $('.stopWatch').css("background-image", "url(assets/images/watch/stopWatch3.png)");
        } if (timer == 4) {
            $('.stopWatch').css("background-image", "url(assets/images/watch/stopWatch4.png)");
        }
        if (timer == 4) { timer = 0 }
    }, 1000);
}
startTimer();

function stopTimer() {
    clearInterval(mainTimer);
}