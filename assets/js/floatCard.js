$(function () {

    // On mouseover: Move 'card-floating-socialIcons' into position and show proper arrow
    $(".playerContainer").on("mouseover",function (e) {
        var pic = $(this).children(".playerProfile").css('background-image');
        var name = $(this).children('.playerStatsContainer').find('h13').html();
        var desc = $(this).children('.playerStatsContainer').find('h20').html();
        $(".playerPic-card-floating").css('background-image',pic);
        $("h18").html(name);
        $("h19").html(desc);
        e.stopPropagation();    
        // h = $(this).height();
        h = 0;
        w = $(window).height();
        wt = $(window).scrollTop();
        var t = $(this).offset().top;
        divPos = t - wt
        var fromLeft = $(this).offset().left+224;
        var above = h + t;
            if (divPos + 136 <= w) {
                $('.card-floating-socialIcons').fadeIn('fast').css({ 'top': above, "left": fromLeft });
                $('.card-floating-socialIcons-arrowLeft-top').fadeIn('fast');
                $('.card-floating-socialIcons-arrowLeft-bottom').fadeOut('fast');
            } else {
                $('.card-floating-socialIcons').fadeIn('fast').css({ 'top': above - 65, "left": fromLeft });
                $('.card-floating-socialIcons-arrowLeft-top').fadeOut('fast');
                $('.card-floating-socialIcons-arrowLeft-bottom').fadeIn('fast');
            }
    });

    // On mouseout: Hide card and arrows after 300ms
    $(".playerContainer").on("mouseout", function () {
        $('.card-floating-socialIcons, .card-floating-socialIcons-arrowDown, .card-floating-socialIcons-arrowUp').hide();
    });

    $('html').click(function() {
        $('.card-floating-socialIcons, .card-floating-socialIcons-arrowDown, .card-floating-socialIcons-arrowUp').hide();
      });
      $('.playerContainer').click(function(event){
        event.stopPropagation();
    });
      
});