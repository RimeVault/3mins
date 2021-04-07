var choice = 0;

$(document).ready(function(){
    setTimeout(function(){$("#pic1").fadeIn(1000);}, 500);
    setTimeout(function(){$("#b01").fadeIn(2000);}, 2000);
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#b02").fadeIn(2000);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(500);
        $("#b03").fadeIn(1000);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        $("#b04").fadeIn(2000);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        $("#pic2").fadeOut(500);
        $("#pic3").fadeIn(500);
        $("#b05").fadeIn(1000);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        $("#b06").fadeIn(2000);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        $("#pic3").fadeOut(500);
        $("#pic4").fadeIn(500);
        $("#b07").fadeIn(1000);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        $("#pic4").fadeOut(500);
        $("#pic5").fadeIn(500);
        $("#b08").fadeIn(1000);
    });

    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        $("#pic5").fadeOut(1000);
        setTimeout(function(){$("#pic6").fadeIn(1000);}, 1000);
        $("#b09").fadeIn(1000);
    });
    $("#b09").click(function(){
        $("#b09").fadeOut(500);
        setTimeout(function(){$("#b10").fadeIn(1000);},1000);
    });
    $("#b10").click(function(){
        $("#b10").fadeOut(1000);
        $("#pic6").fadeOut(500);
        $("#pic7").fadeIn(500);
        $("#b11").fadeIn(2000);
        setTimeout(function(){$("#op0").fadeIn(1000);$("#op1").fadeIn(1000);},2000);
    });

    $("#op0").click(function(){
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#b11").fadeOut(500);
        $("#b12").fadeIn(2000);
        $("#b12").click(function(){
            $("#b12").fadeOut(500);
            $("#b13").fadeIn(2000);
            setTimeout(function(){$("#op2").fadeIn(1000);},2000);
        });
    });


    $("#op1").click(function(){
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#b11").fadeOut(500);
        $("#b14").fadeIn(2000);
        $("#b14").click(function(){
            $("#b14").fadeOut(500);
            $("#b15").fadeIn(2000);
        });
        $("#b15").click(function(){
            $("#b15").fadeOut(500);
            $("#b16").fadeIn(2000);
            setTimeout(function(){$("#op2").fadeIn(1000);},2000);
        });
    });


    $("#op2").click(function(){
        $("#op2").fadeOut(500);
        $("#b13").fadeOut(500);
        $("#b16").fadeOut(500);
        $("#b17").fadeIn(2000);
    });
    $("#b17").click(function(){
        $("#b17").fadeOut(500);
        $("#pic7").fadeOut(500);
        $("#pic8").fadeIn(500);
        setTimeout(function(){$("#pic8").fadeOut(500);$("#pic9").fadeIn(500);$("#b18").fadeIn(500);},2000);
    });
    $("#b18").click(function(){
        $("#b18").fadeOut(500);
        $("#pic9").fadeOut(500);
        setTimeout(function(){window.location.href="13.html";}, 3000);
    });

});



