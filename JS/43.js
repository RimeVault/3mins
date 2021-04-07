$(document).ready(function(){
    setTimeout(function(){$("#intr1").fadeIn(1000);}, 2000);
    $("#intr1").click(function(){
        $("#intr1").fadeOut(500);
        setTimeout(function(){$("#pic1").fadeIn(1000);console.log(1)},4000);
        setTimeout(function(){$("#pic1").fadeOut(1000);$("#pic2").fadeIn(1000);},8000);
        setTimeout(function(){$("#pic2").fadeOut(1000);$("#pic3").fadeIn(1000);},12000);
        setTimeout(function(){$("#pic3").fadeOut(1000);$("#pic4").fadeIn(1000);},16000);
        setTimeout(function(){$("#b01").fadeIn(1000);},17000);
    });
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        setTimeout(function(){$("#b02").fadeIn(1000);},3000);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        setTimeout(function(){$("#b03").fadeIn(1000);},3000);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        setTimeout(function(){$("#b04").fadeIn(1000);},3000);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        setTimeout(function(){$("#b05").fadeIn(1000);},3000);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        setTimeout(function(){$("#b06").fadeIn(1000);},3000);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        setTimeout(function(){$("#b07").fadeIn(1000);},3000);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        setTimeout(function(){$("#pic4").fadeOut(1000);},18000);
        setTimeout(function(){window.location.href="50.html";},22000);
    });


});



