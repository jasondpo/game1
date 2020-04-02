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

// Select topic and choose filter
const rand = Math.floor((Math.random() * 10000) + 1);
let bestTime = false;
var theTopic;
let filter ='';

function selectTopic(this_instance){
    theTopic=this_instance // only used in selectFilter function
    $(".playerList").load("leaderboards/load-"+this_instance+".php"+ "#" + rand);
}

function selectFilter(){
    if(bestTime==false){
        bestTime=true;
        filter='time';
    }else{
        bestTime=false;
        filter='score';
    }
    $(".playerList").load("leaderboards/load-"+theTopic+".php"+ "#" + rand, {
        filter:filter
    });
}