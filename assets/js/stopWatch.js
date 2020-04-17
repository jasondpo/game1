import { computerVoice } from './eyes.js';

///////////	GET TIME ///////
/* This is the start time and end time. The "diff" function calculates the difference*/
var startTime;
var stopTime;
var totalTime = "";
var recordTime = true;


export function startWatch() { // score.js calls this and begins ticking animation
    startTime = Math.round(new Date() / 1000); // time in seconds since 1970?
}

export function stopWatch(this_instance) {  // main.js calls this after "You Lose"
    if (this_instance == 'update') {
        recordTime = false
    } else {
        recordTime = true
    }
    stopTime = Math.round(new Date() / 1000); // time in seconds since 1970? 
    diff();
}
///////////	CALCULATE TIME DIFFERENCE ///////
function diff() {

    var totalSeconds = stopTime - startTime;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - minutes * 60;

    totalTime = (minutes <= 9 ? '0' : '') + minutes + ":" + (seconds <= 9 ? '0' : '') + seconds + "s";

    if (recordTime == true) {
        alert(totalTime + " has been recorded.")
        // $("#diff").val(totalTime)
    }
}

$('.stopWatch').mouseover(function () {
    stopWatch('update');
    if (totalTime.length != 6) {
        $('.messageBubble h22').html("Timer will start after first puzzle piece is removed")
        computerVoice('voice1');
    } else {
        $('.messageBubble h22').html(totalTime + " and counting...")
        computerVoice('voice2');
    }
})




