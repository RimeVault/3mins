$(document).ready(function(){
    setTimeout(function(){$("#b01").fadeIn(1000);}, 3000);
    $("#b01").click(function(){
        let el = localStorage.getItem('el');
        console.log(el);
        $("#b01").fadeOut(1000);
        $("#b02").fadeIn(1500);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(2500);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        $("#b04").fadeIn(2500);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        $("#b05").fadeIn(2500);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        $("#b06").fadeIn(2500);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        $("#b07").fadeIn(2500);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        $("#b08").fadeIn(2500);
    });
    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        $("#b09").fadeIn(1500);
    });
    $("#b09").click(function(){
        $("#b09").fadeOut(500);
        $("#b10").fadeIn(500);
    });
    $("#b10").click(function(){
        $("#b10").fadeOut(500);
        $("#b11").fadeIn(500);
    });
    $("#b11").click(function(){
        $("#b11").fadeOut(500);
        $("#b12").fadeIn(500);
    });
    $("#b12").click(function(){
        $("#b12").fadeOut(1500);
        let el = localStorage.getItem('el');
        if (el == 'no'){setTimeout(function(){window.location.href="51.html"; }, 2000);}
        else {setTimeout(function(){window.location.href="52.html"; }, 2000);}
    });
});



