function stopTimer() {
    clearInterval(mainTimer);
    $('.logoTimerBox').css("background-image", "url(assets/images/greyLogo.png)");
}

///////////	GET TIME ///////
/* This is the start time and end time. The "diff" function calculates the difference*/
function getTime() {
    var currentTime = Math.round(new Date() / 1000); // time in seconds since 1970?
    return currentTime;
}
///////////	CALCULATE TIME DIFFERENCE ///////
function diff(start, end) {
    var start = $("#startTime").val();
    var end = $("#endTime").val();

    totalSeconds = end - start;

    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - minutes * 60;

    totalTime = (minutes <= 9 ? '0' : '') + minutes + ":" + (seconds <= 9 ? '0' : '') + seconds + "s";

    $("#diff").val(totalTime)

}

/////// Seconds START ///////
function getSeconds() {
    var start = $("#startTime").val();
    var end = $("#endTime").val();

    startSec = start.substring(start.lastIndexOf(":"))
    startSec = startSec.slice(1)

    endSec = end.substring(end.lastIndexOf(":"))
    endSec = endSec.slice(1)
    // 		alert(end-startSec)	
    theSeconds = startSec - endSec

    var negative = theSeconds;
    seconds = -negative > 0 ? -negative : negative;
    // 		alert(seconds)
    return seconds
}
/////// Seconds ENDS ///////



//////////////////////////// Today's Date ///////////////////////////////////////////

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear().toString().substr(-2);

todaysDate = mm + '/' + dd + '/' + yyyy;
$(".date").html(todaysDate)

///////////////////////////////////////////////////

$("#tryAgainBtn").click(function () {
    location.reload();
})

$("#clicksSubmitResultsBtn").click(function () {
    $("#submitResultsBtn").click();
})		