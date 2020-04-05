var dot1 = [
    "You are the smartest person I know.",
    "If you can get this then you're too good for your job.",
    "You must be really observant to get this.",
    "Nothing gets past you.",
    "You should be a detective if you can get this."
]

var dot2 = [
    "",
]



$(".dot1").mouseover(function () {
    $("h22").html(dot1[2]);
})

$(".dot1").mouseout(function () {
    $("h22").html();
})