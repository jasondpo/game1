// Toggle send and receive messages box.
$("h30").click(function () {
    if ($(this).find('span').html() == "Message") {
        $(this).find('span').html('Inbox');
        $('.toggleSendMessage').hide();
        $('.toggleReceiveMessage').show();

    } else {
        $(this).find('span').html('Message');
        $('.toggleSendMessage').show();
        $('.toggleReceiveMessage').hide();
    }
});