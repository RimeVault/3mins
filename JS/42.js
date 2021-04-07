$(document).ready(function(){
    
    setTimeout(function(){$("#intr1").fadeIn(1000);}, 3000);
    $("#intr1").click(function(){
        $("#intr1").fadeOut(500);
        setTimeout(function(){$("#intr2").fadeIn(1000);},2000);
    });
    $("#intr2").click(function(){
        $("#intr2").fadeOut(500);
        setTimeout(function(){$("#intr3").fadeIn(1000);},2000);
    });
    $("#intr3").click(function(){
        $("#intr3").fadeOut(500);
        setTimeout(function(){$("#pic1").fadeIn(1000);},2000);
        setTimeout(function(){$("#b01").fadeIn(500);},3000);
    });

    
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#b02").fadeIn(500);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(500);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        $("#b04").fadeIn(500);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(1000);
        $("#b05").fadeIn(500);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        $("#b06").fadeIn(500);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        $("#b07").fadeIn(500);
        setTimeout(function(){$("#b07").fadeOut(500);$("#pic2").fadeOut(500);},3000);
        setTimeout(function(){window.location.href="43.html";},6000);
    });
});



