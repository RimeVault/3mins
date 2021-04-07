$(document).ready(function(){
    setTimeout(function(){$("#b01").fadeIn(1000);}, 3000);
    $("#b01").click(function(){
        $("#b01").fadeOut(1000);
        $("#b02").fadeIn(1500);
        setTimeout(function(){console.log("Shake")}, 500);
        for (let i=0;i<4;i++)
        {
            $("#b02").animate({top:'60px'},20).animate({left:'30px'},20).animate({left:'0px'},20).animate({top:'-10px'},40);
        }
        $("#b02").animate({top:'8px'},250);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(2500);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(1500);
        setTimeout(function(){window.location.href="11.html"; }, 2000);
    });
});



