import { computerVoice, fadeInEyes } from './eyes.js';


// Toggle logout dialogue box
$('.userProfilePic').click(function () {
    $('.logoutMessageBox').toggle();
})
$('html').click(function () {
    $(".logoutMessageBox").hide();
});
$('.logoutMessageBox, .userProfilePic').click(function (event) {
    event.stopPropagation();
});

//Logout Btn
$("#LogoutBtn").mouseover(function(){
    computerVoice('voice1');
    fadeInEyes();
    $('.messageBubble h22').html("Come back soon!")
})


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

//// Send Messages to functions page ////

$('#sendMessageForm').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'functions.php',
        data: $('#sendMessageForm').serialize(),
        success: function () {
            // alert('form was submitted');
        }
    });
});


