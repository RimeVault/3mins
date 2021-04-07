var choice = 0;

$(document).ready(function(){
    setTimeout(function(){$("#pic1").fadeIn(1000);}, 500);
    setTimeout(function(){$("#b01").fadeIn(2000);}, 2000);
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(500);
        $("#b02").fadeIn(2000);
        setTimeout(function(){$("#op0").fadeIn(1000);$("#op1").fadeIn(1000);},2000);
    });

    $("#op0").click(function(){
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(2000);
        $("#b03").click(function(){
            $("#b03").fadeOut(500);
            $("#b04").fadeIn(2000);
            setTimeout(function(){$("#b04").fadeOut(500);$("#pic2").fadeOut(500);$("#pic3").fadeIn(500);},2000);
            setTimeout(function(){$("#pic3").fadeOut(500);$("#pic4").fadeIn(500);},4000);
            setTimeout(function(){$("#b08").fadeIn(500);},5000);
        });
    });


    $("#op1").click(function(){
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#b02").fadeOut(500);
        $("#b05").fadeIn(2000);
        $("#b05").click(function(){
            $("#b05").fadeOut(500);
            $("#b06").fadeIn(2000);
        });
        $("#b06").click(function(){
            $("#b06").fadeOut(500);
            $("#b07").fadeIn(2000);
            setTimeout(function(){$("#op2").fadeIn(1000);},2000);
        });
        $("#op2").click(function(){
            $("#op2").fadeOut(500);
            $("#b07").fadeOut(500);
            setTimeout(function(){$("#b04").fadeOut(500);$("#pic2").fadeOut(500);$("#pic3").fadeIn(500);},2000);
            setTimeout(function(){$("#pic3").fadeOut(500);$("#pic4").fadeIn(500);},4000);
            setTimeout(function(){$("#b08").fadeIn(500);},5000);
        });
    });

    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        setTimeout(function(){$("#pic4").fadeOut(500);$("#pic5").fadeIn(500);$("#b09").fadeIn(1000);},3000);
    });
    $("#b09").click(function(){
        $("#b09").fadeOut(500);
        $("#pic5").fadeOut(500);
        $("#pic6").fadeIn(500);
        $("#b10").fadeIn(1500);
    });
    $("#b10").click(function(){
        $("#b10").fadeOut(500);
        $("#b11").fadeIn(1500);
    });
    $("#b11").click(function(){
        $("#b11").fadeOut(500);
        setTimeout(function(){$("#pic6").fadeOut(2000);$("#pic7").fadeIn(2000);},3000);
        setTimeout(function(){$("#pic7").fadeOut(2000);$("#pic8").fadeIn(2000);},5000);
        setTimeout(function(){$("#pic8").fadeOut(2000);$("#pic9").fadeIn(2000);},15000);
        setTimeout(function(){$("#pic9").fadeOut(2000);},18000);
        setTimeout(function(){window.location.href="23.html";},21000);
    });

});



