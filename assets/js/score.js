
var totalScore = 100
var beginScoring = false;

$(document).on("keydown", function (event) {
    if (event.which == 80 && beginScoring == true) {
        tallyScore();
    } else {
        beginScoring = true;
        startTimer();
    };
});
function tallyScore() {
    totalScore--
    $("#score").val(totalScore);
}

function startTimer() {
    $(".stopWatch").addClass('stopWatchGo div');
}