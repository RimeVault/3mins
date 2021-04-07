$(document).ready(function(){
    setTimeout(function(){$("#b01").fadeIn(1000);}, 3000);
    $("#b01").click(function(){
        $("#b01").fadeOut(1000);
        $("#b02").fadeIn(1500);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(2500);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(1500);
        setTimeout(function(){window.location.href="31.html"; }, 2000);
    });
});



