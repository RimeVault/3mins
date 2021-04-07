$(document).ready(function(){
    setTimeout(function(){$("#intr").fadeIn(1000);}, 3000);
    $("#intr").click(function(){
        $("#intr").fadeOut(500);
        $("#pic1").fadeIn(2500);
        setTimeout(function(){$("#pic1").fadeOut(500);$("#pic2").fadeIn(500);}, 3500);
        setTimeout(function(){$("#b01").fadeIn(500);}, 4500);
    });
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#b02").fadeIn(1500);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(2500);
        setTimeout(function(){$("#pic2").fadeOut(500);$("#pic3").fadeIn(500);$("#b03").fadeOut(500);}, 4500);
        setTimeout(function(){$("#b04").fadeIn(500);}, 6000);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        $("#b05").fadeIn(1500);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        $("#b06").fadeIn(1500);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        $("#b07").fadeIn(1500);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        $("#b08").fadeIn(1500);
    });
    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        $("#b09").fadeIn(1500);
    });
    $("#b09").click(function(){
        $("#b09").fadeOut(500);
        $("#b10").fadeIn(1500);
    });
    $("#b10").click(function(){
        $("#b10").fadeOut(500);
        $("#b11").fadeIn(1500);
    });
    $("#b11").click(function(){
        $("#b11").fadeOut(500);
        $("#b12").fadeIn(1500);
    });
    $("#b12").click(function(){
        $("#b12").fadeOut(500);
        $("#b13").fadeIn(1500);
    });
    $("#b13").click(function(){
        $("#b13").fadeOut(500);
        setTimeout(function(){$("#b14").fadeIn(500);}, 4000);
    });
    $("#b14").click(function(){
        $("#b14").fadeOut(500);
        setTimeout(function(){$("#b15").fadeIn(500);}, 2000);
        setTimeout(function(){$("#b15").fadeOut(500);$("#b16").fadeIn(500);}, 4000);
        setTimeout(function(){$("#b16").fadeOut(500);$("#b17").fadeIn(500);}, 6000);
        setTimeout(function(){$("#b17").fadeOut(500);$("#b18").fadeIn(500);}, 8000);
        setTimeout(function(){$("#b18").fadeOut(500);$("#b19").fadeIn(500);}, 10000);
    });

    $("#b19").click(function(){
        $("#b19").fadeOut(500);
        $("#pic3").fadeOut(500);
        setTimeout(function(){$("#intr1").fadeIn(500);}, 4000);
    });
    $("#intr1").click(function(){
        $("#intr1").fadeOut(500);
        setTimeout(function(){$("#intr2").fadeIn(500);}, 4000);
    });
    $("#intr2").click(function(){
        $("#intr2").fadeOut(500);
        setTimeout(function(){$("#intr3").fadeIn(500);}, 4000);
    });
    $("#intr3").click(function(){
        $("#intr3").fadeOut(500);
        setTimeout(function(){$("#intr4").fadeIn(500);}, 4000);
    });
    $("#intr4").click(function(){
        $("#intr4").fadeOut(500);
        setTimeout(function(){$("#intr5").fadeIn(500);}, 4000);
    });
    $("#intr5").click(function(){
        let lo = localStorage.getItem('lo');
        if (lo == 'yes') {
            $("#intr5").fadeOut(500);
            setTimeout(function(){$("#intr6").fadeIn(500);}, 4000);
        }
        else{
            $("#intr5").fadeOut(500);
            setTimeout(function(){window.location.href="41.html"}, 4000);
        }
    });
    $("#intr6").click(function(){
        $("#intr6").fadeOut(500);
        setTimeout(function(){$("#intr7").fadeIn(500);}, 4000);
    });
    $("#intr7").click(function(){
        $("#intr7").fadeOut(500);
        setTimeout(function(){window.location.href="42.html"}, 4000);
    });
});



