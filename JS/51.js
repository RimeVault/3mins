$(document).ready(function(){
    setTimeout(function(){$("#intr1").fadeIn(1000);}, 2000);
    $("#intr1").click(function(){
        $("#intr1").fadeOut(500);
        setTimeout(function(){$("#pic1").fadeIn(1000);},3000);
        setTimeout(function(){$("#pic1").fadeOut(1000);$("#pic2").fadeIn(1000);},6000);
        setTimeout(function(){$("#b01").fadeIn(1000);},7000);
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
        setTimeout(function(){$("#b06").fadeIn(1000);},1500);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        setTimeout(function(){$("#b06").fadeIn(1000);},1500);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        setTimeout(function(){$("#b07").fadeIn(1000);},1500);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        setTimeout(function(){$("#b08").fadeIn(1000);},1500);
    });

    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        setTimeout(function(){$("#pic2").fadeOut(1000);$("#pic3").fadeIn(1000);},2500);
        setTimeout(function(){$("#pic3").fadeOut(1000);$("#pic4").fadeIn(1000);},4500);
        setTimeout(function(){$("#pic4").fadeOut(1000);$("#pic5").fadeIn(1000);},6500);
        setTimeout(function(){$("#pic5").fadeOut(1000);$("#pic6").fadeIn(1000);},8500);
        setTimeout(function(){$("#b09").fadeIn(1000);},9500);
    });
    $("#b09").click(function(){
        $("#b09").fadeOut(500);
        setTimeout(function(){$("#b10").fadeIn(1000);},1500);
    });
    $("#b10").click(function(){
        $("#b10").fadeOut(500);
        setTimeout(function(){$("#b11").fadeIn(1000);},4000);
    });
    $("#b11").click(function(){
        $("#b11").fadeOut(500);
        setTimeout(function(){$("#b12").fadeIn(1000);},1500);
    });



    $("#b12").click(function(){
        $("#b12").fadeOut(500);
        setTimeout(function(){$("#pic6").fadeOut(200);$("#pic7").fadeIn(1000);},2000);
        setTimeout(function(){$("#pic7").fadeOut(200);},5000);
        setTimeout(function(){window.location.href="ending2.html";},7000);
    });


});



