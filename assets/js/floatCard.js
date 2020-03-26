$(function () {

    // On mouseover: Move 'card-floating-socialIcons' into position and show proper arrow
    $(".connect").on("mouseover", function () {
        h = $(this).height();
        w = $(window).height();
        wt = $(window).scrollTop();
        var t = $(this).offset().top;
        divPos = t - wt
        var fromLeft = $(this).offset().left;
        var above = h + t;
        showCard = setTimeout(function () {
            if (divPos + 136 <= w) {
                $('.card-floating-socialIcons').fadeIn('fast').css({ 'top': above + 6, "left": fromLeft });
                $('.card-floating-socialIcons-arrowUp').fadeIn('fast');
                $('.card-floating-socialIcons-arrowDown').fadeOut('fast');
            } else {
                $('.card-floating-socialIcons').fadeIn('fast').css({ 'top': above - 136, "left": fromLeft });
                $('.card-floating-socialIcons-arrowDown').fadeIn('fast');
                $('.card-floating-socialIcons-arrowUp').fadeOut('fast');
            }
        }, 300)
    });

    // On mouseout: Hide card and arrows after 300ms
    $(".connect").on("mouseout", function () {
        // 		clearInterval(showCard);
        hideCard = setTimeout(function () {
            $('.card-floating-socialIcons, .card-floating-socialIcons-arrowDown, .card-floating-socialIcons-arrowUp').hide();
        }, 300);
    });

    // On 'card-floating-socialIcons' mouseover: Cancel 'hideCard'
    $(".card-floating-socialIcons").on("mouseover", function () {
        clearInterval(hideCard);
    });

    // On 'card-floating-socialIcons' mouseout: 'hideCard2'	
    $(".card-floating-socialIcons").on("mouseout", function () {
        hideCard2 = setTimeout(function () {
            $('.card-floating-socialIcons').hide();
            cardRestState();
            connectRestState();
        }, 300);
    });

    //
    $(".card-floating-socialIcons-list").mouseover(function () {
        clearInterval(hideCard2);
        clearInterval(resetCard);
    });

    //////////////////// maintain Hover State //////////////// 

    /// Simulate hover state on 'card-container'
    $('h38').mouseover(function () {
        $(this).css('background-color', '#ccd0d8');
        $(this).closest('.card-container').css('box-shadow', '0px 0px 3px 3px rgba(55, 55, 55, .2)');
        $(this).closest('.card-container').find('.card-container-profile').css({ "width": "110%", "margin-left": "-10px" })
    })

    $('.card-container-connectBar').mouseout(function () {
        resetCard = setTimeout(function () {
            cardRestState();
            connectRestState()
        }, 300)
    })


    function cardRestState() {
        $('.card-container').css('box-shadow', '');
        $('.card-container-profile').css({ "width": "", "margin-left": "" });
    }

    function connectRestState() {
        $('h38').css('color', '');
        $('h38').css({ 'background-color': '', 'background-position': '80px -30px' });
    }



    /// Simulate hover state on 'connect' button



    /////// If Clicked //////	

    $(".connect").click(function () {
        h = $(this).height();
        w = $(window).height();
        wt = $(window).scrollTop();
        var t = $(this).offset().top;
        divPos = t - wt
        var fromLeft = $(this).offset().left;
        var above = h + t;

        if (divPos + 136 <= w) {
            $('.card-floating-socialIcons').show().css({ 'top': above + 6, "left": fromLeft });
            $('.card-floating-socialIcons-arrowUp').show();
            $('.card-floating-socialIcons-arrowDown').hide();
        } else {
            $('.card-floating-socialIcons').show().css({ 'top': above - 136, "left": fromLeft });
            $('.card-floating-socialIcons-arrowDown').show();
            $('.card-floating-socialIcons-arrowUp').hide();
        }
    });
});

//////////////  Show AND link Social Icons in floating selection box under profile pics ////////////////////	

$(".connect").mouseover(function () {
    $('.card-floating-socialIcons-class').hide();
    fb = $(this).attr('data-fb');
    lkn = $(this).attr('data-lkn');
    insta = $(this).attr('data-in');
    yt = $(this).attr('data-yt');
    vm = $(this).attr('data-vm');

    if (fb != "") {
        setTimeout(function () {
            $('.facebook').show().data('link', fb);
        }, 300);
    }
    if (lkn != "") {
        setTimeout(function () {
            $('.linkedin').show().data('link', lkn);
        }, 300);
    }
    if (insta != "") {
        setTimeout(function () {
            $('.instagram').show().data('link', insta);
        }, 300);
    }
    if (yt != "") {
        setTimeout(function () {
            $('.youtube').show().data('link', yt);
        }, 300);
    }
    if (vm != "") {
        setTimeout(function () {
            $('.vimeo').show().data('link', vm);
        }, 300);
    }
});

$('.facebook, .linkedin, .instagram, .youtube, .vimeo').click(function () {
    socialLink = $(this).data('link');
    window.open(socialLink);
});
//////////////////////////  Show Share Dialogue Box STARTS /////////////////

$('.shareBox-overlay').click(function () {
    $('.shareBox-overlay').fadeOut('fast');
    $('.shareBox-container').fadeOut('fast');
    $('.search-container').fadeOut('fast');
})

$('.searchBar-shareBtn').click(function () {
    $('.shareBox-overlay').fadeIn('fast');
    $('.shareBox-container').fadeIn('fast');
})
//////////////////////////  Show Share Dialogue Box ENDS /////////////////


//////////////////////////Show seach field STARTS /////////////////
$('.searchBar-searchBtn').click(function () {
    $('.shareBox-overlay').fadeIn('fast');
    $('.search-container').fadeIn('fast');
})


//////////////////////////Show seach field ENDS /////////////////
