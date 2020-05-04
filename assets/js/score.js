import { startWatch } from './stopWatch.js';

var totalScore = 100;
var beginScoring = false;

$(document).on("keydown", function (event) {
    if (event.which == 80 && beginScoring == true) {
        tallyScore();
    } else if (event.which == 80 && $(".overlayCurtain").is(':hidden')) {
        beginScoring = true;
        startTimer();
    };
});
export function tallyScore() {
    totalScore--
    $("#score").val(totalScore);
}

export function startTimer() {
    $(".stopWatch").addClass('stopWatchGo div');
    startWatch(); // Function from stopWatch.js
}

export function resetBeginScoring() {
    beginScoring = false
}