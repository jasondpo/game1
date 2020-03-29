$(".navBtnGroup").click(function () {
    dehighlight();
    $(this).find('.btnCategory').addClass("btnCategoryActive");
    $(this).find('.arrow-down').show();
    $("h23").html($(this).find('h21').html() + ":");
})

function dehighlight() {
    $(".btnCategory").each(function () {
        $(this).removeClass("btnCategoryActive");
        $('.arrow-down').hide();
    })
}