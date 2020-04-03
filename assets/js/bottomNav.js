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

// Show description on hover
function showDesc(this_instance){
    $("h27").hide();
    $("h26").show();
    if(this_instance=="people"){
        $("h26 span").html(" Celebrities • Characters • Local");
    }
    if(this_instance=="vintage"){
        $("h26 span").html(" Defunct Products • Shuttered Businesses");
    }
    if(this_instance=="cartoons"){
        $("h26 span").html(" Comics • Manga • CGI • Traditional");
    }
    if(this_instance=="jcco"){
        $("h26 span").html(" Coworkers • Office Items • Buildings");
    }
}
// Return to clicked description on mouseout
var content=null;
$(document).on('mouseout', '#btmNav li', function(){
    if(content!=null){
        $('h26').html('Includes:<span>'+content+'</span>');
    }else{
        $('h26').hide()
    }
})

$(document).on('click', '#btmNav li', function(){
    content=$('h26 span').html();
})

