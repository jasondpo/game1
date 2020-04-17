import { fadeOutEyes } from './eyes.js';


var dot1 = [
    "You are the smartest person I know.",
    "If you can get this then you're too good for your job.",
    "You must be really observant to get this.",
    "Nothing gets by you.",
    "You should be a detective if you can get this."
]

var dot2 = [
    "This is only a test",
]

var randMesg;

$(".rightTopFace").mouseover(function(){
    randMesg=Math.floor((Math.random() * 5) + 1)
    fadeOutEyes();
    $("h22").html(dot1[randMesg]); 
})

$(".dot1").mouseover(function () {
    randMesg=Math.floor((Math.random() * 5) + 1)
    fadeOutEyes();
    $("h22").html(dot1[randMesg]);
})

$(".dot2").mouseover(function () {
    $("h22").html(dot2[0]);
})