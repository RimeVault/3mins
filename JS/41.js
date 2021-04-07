$(document).ready(function(){
    setTimeout(function(){$("#intr1").fadeIn(1000);}, 3000);
    $("#intr1").click(function(){
        $("#intr1").fadeOut(500);
        setTimeout(function(){$("#intr2").fadeIn(2000);},1000);
    });
    $("#intr2").click(function(){
        $("#intr2").fadeOut(500);
        setTimeout(function(){$("#pic1").fadeIn(2000);},500);
        setTimeout(function(){$("#pic1").fadeOut(2000);$("#pic2").fadeIn(2000);},3000);
        setTimeout(function(){$("#pic2").fadeOut(2000);$("#pic3").fadeIn(2000);},6000);
        setTimeout(function(){$("#pic3").fadeOut(2000);$("#pic4").fadeIn(2000);},8000);
        setTimeout(function(){$("#pic4").fadeOut(2000);$("#pic5").fadeIn(2000);},11000);
        setTimeout(function(){$("#pic5").fadeOut(2000);$("#pic6").fadeIn(2000);},13000);
        setTimeout(function(){$("#pic6").fadeOut(2000);},15000);
        setTimeout(function(){$("#b01").fadeIn(1000);},18000);
    });
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        setTimeout(function(){$("#b02").fadeIn(2000);},1000);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        setTimeout(function(){$("#b03").fadeIn(2000);},1000);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        setTimeout(function(){$("#b04").fadeIn(2000);},1000);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        setTimeout(function(){$("#b05").fadeIn(2000);},1000);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        setTimeout(function(){$("#b06").fadeIn(2000);},1000);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        setTimeout(function(){window.location.href="ending1.html";},5000);
    });
});



