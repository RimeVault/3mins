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
        setTimeout(function(){$("#op0").fadeIn(500);$("#op1").fadeIn(500);},5000);
    });

    $("#op0").click(function(){
        $("#op0").fadeOut(500);$("#op1").fadeOut(500);$("#b01").fadeOut(500);
        $("#b02").fadeIn(1000);
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
        $("#b05").fadeIn(500);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(1000);
        $("#b08").fadeIn(500);
    });


    $("#op1").click(function(){
        $("#op0").fadeOut(500);$("#op1").fadeOut(500);$("#b01").fadeOut(500);
        $("#b06").fadeIn(1000);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        $("#b07").fadeIn(500);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(1000);
        $("#b08").fadeIn(500);
    });

    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        $("#b09").fadeIn(500);
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
        $("#b12").fadeOut(500);
        $("#b13").fadeIn(500);
        setTimeout(function(){$("#pic2").fadeOut(500);$("#b13").fadeOut(500);},3500);
        setTimeout(function(){$("#pic3").fadeIn(500);},4500);
        setTimeout(function(){$("#pic3").fadeOut(500);$("#pic4").fadeIn(500);},7000);
        setTimeout(function(){$("#b14").fadeIn(500);},7500);
    });
    $("#b14").click(function(){
        $("#b14").fadeOut(500);
        $("#b15").fadeIn(500);
    });
    $("#b15").click(function(){
        $("#b15").fadeOut(500);
        $("#b16").fadeIn(500);
    });
    $("#b16").click(function(){
        $("#b16").fadeOut(500);
        $("#b17").fadeIn(500);
    });
    $("#b17").click(function(){
        $("#b17").fadeOut(500);
        $("#b18").fadeIn(500);
    });
    $("#b18").click(function(){
        $("#b18").fadeOut(500);
        $("#pic4").fadeOut(500);
        setTimeout(function(){$("#pic8").fadeIn(1000);},3000);
        setTimeout(function(){$("#b19").fadeIn(1000);},4000);
    });
    $("#b19").click(function(){
        $("#b19").fadeOut(500);
        $("#b20").fadeIn(500);
    });
    $("#b20").click(function(){
        $("#b20").fadeOut(500);
        $("#b21").fadeIn(500);
    });
    $("#b21").click(function(){
        $("#b21").fadeOut(500);
        $("#pic8").fadeOut(500);
        setTimeout(function(){$("#pic5").fadeIn(500);},2500);
        setTimeout(function(){$("#b22").fadeIn(500);},4500);
    });
    $("#b22").click(function(){
        $("#b22").fadeOut(500);
        $("#b23").fadeIn(500);
    });
    $("#b23").click(function(){
        $("#b23").fadeOut(500);
        $("#b24").fadeIn(500);
    });
    $("#b24").click(function(){
        $("#b24").fadeOut(500);
        setTimeout(function(){$("#pic5").fadeOut(1000);$("#pic6").fadeIn(1000);},2500);
        setTimeout(function(){$("#pic6").fadeOut(1000);$("#pic7").fadeIn(1000);},5500);
        setTimeout(function(){$("#b25").fadeIn(1000);},8500);
    });
    $("#b25").click(function(){
        $("#b25").fadeOut(500);
        $("#pic7").fadeOut(8000);
        setTimeout(function(){window.location.href="40.html";},10000);
    });
});



