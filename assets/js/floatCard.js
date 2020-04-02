$(function () {

    // On mouseover: Move 'card-floating-socialIcons' into position and show proper arrow
    $(document).on("mouseover", ".playerContainer", function (e) {
        var pic = $(this).children(".playerProfile").css('background-image');
        var name = $(this).children('.playerStatsContainer').find('h13').html();
        var desc = $(this).children('.playerStatsContainer').find('h20').html();
        $(".playerPic-card-floating").css('background-image', pic);
        $("h18").html(name);
        $("h19").html(desc);
        e.stopPropagation();
        // h = $(this).height();
        w = $(window).height();
        wt = $(window).scrollTop();
        var t = $(this).offset().top;
        divPos = t - wt
        var fromLeft = $(this).offset().left + 224;
        var above = t;
        if (divPos + 166 <= w) {
            $('.card-floating-socialIcons').fadeIn('fast').css({ 'top': above, "left": fromLeft });
            $('.card-floating-socialIcons-arrowLeft-top').fadeIn('fast');
            $('.card-floating-socialIcons-arrowLeft-bottom').fadeOut('fast');
        } if (divPos + 166 >= w && divPos + 166 <= w + 62) {
            $('.card-floating-socialIcons').fadeIn('fast').css({ 'top': above - 65, "left": fromLeft });
            $('.card-floating-socialIcons-arrowLeft-top').fadeOut('fast');
            $('.card-floating-socialIcons-arrowLeft-bottom').fadeIn('fast');
        }
    });

    // On mouseout: Hide card and arrows after 300ms
    $(document).on("mouseout", ".playerContainer", function () {
        $('.card-floating-socialIcons, .card-floating-socialIcons-arrowDown, .card-floating-socialIcons-arrowUp').hide();
    });
});

/// Hide Cards when click oustide of playerContainer or hover over h17

$("h17").click(function () {
    if ($(this).find('h25').html() == "Best Score")
        $(this).find('h25').html('Best Time')
    else
        $(this).find('h25').html('Best Score');
})

$("h17").click(function () {
    $(".card-floating-socialIcons").hide();
})

$('html').click(function () {
    $(".card-floating-socialIcons").hide();
});
$('h17').mouseover(function () {
    $(".card-floating-socialIcons").hide();
});

$('.playerContainer').click(function (event) {
    event.stopPropagation();
});


