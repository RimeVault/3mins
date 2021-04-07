$(document).ready(function(){
    setTimeout(function(){$("#intr").fadeIn(1000);}, 3000);
    $("#intr").click(function(){
        $("#intr").fadeOut(500);
        $("#pic1").fadeIn(2500);
        $("#b01").fadeIn(2500);
    });
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#b02").fadeIn(2500);
    });
    $("#b02").click(function(){
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(500);
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(2500);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        $("#pic2").fadeOut(500);
        $("#pic3").fadeIn(500);
        setTimeout(function(){$("#pic3").fadeOut(1500);}, 2000);
        setTimeout(function(){window.location.href="22.html"; }, 4000);
    });
});



