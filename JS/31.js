var f=0,s=0,t=0;



$(document).ready(function(){
    setTimeout(function(){$("#intr").fadeIn(1000); console.log('hey')}, 3000);
    $("#intr").click(function(){
        $("#intr").fadeOut(500);
        $("#pic1").fadeIn(2500);
        $("#b01").fadeIn(2500);
    });
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#pic1").fadeOut(500);
        $("#pic2").fadeIn(500);
        $("#b02").fadeIn(2000);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(500);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        $("#pic2").fadeOut(500);
        $("#pic3").fadeIn(500);
        $("#b04").fadeIn(2000);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        $("#b05").fadeIn(500);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        let el = localStorage.getItem('ex');
        if (el == 'no'){
            $("#pic3").fadeOut(500);
            $("#pic5").fadeIn(1500);
            setTimeout(function(){$("#pic5").fadeOut(1000);}, 3000);
            let lo=localStorage.getItem('lo');
            if (lo == 'yes'){setTimeout(function(){window.location.href="33.html";}, 5000);}
            else {setTimeout(function(){window.location.href="34.html";}, 5000);}
        }
        else {
            setTimeout(function(){$("#b06").fadeIn(1000);}, 2000);
        }
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        $("#b07").fadeIn(500);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        $("#b08").fadeIn(500);
    });
    $("#b08").click(function(){
        $("#b08").fadeOut(1000);
        $("#b09").fadeIn(1000);
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
        $("#pic3").fadeOut(500);
        $("#pic7").fadeIn(500);
        $("#b13").fadeIn(500);
    });
    $("#b13").click(function(){
        $("#b13").fadeOut(500);
        $("#pic7").fadeOut(500);
        $("#pic8").fadeIn(500);
        $("#b14").fadeIn(500);
        setTimeout(function(){console.log("Shake");
        for (let i=0;i<4;i++)
        {
            $("#b14").animate({top:'60px'},20).animate({left:'30px'},20).animate({left:'0px'},20).animate({top:'-10px'},40);
        }}, 800);
        $("#b14").animate({top:'8px'},800);
    });
    $("#b14").click(function(){
        $("#b14").fadeOut(500);
        $("#pic8").fadeOut(500);
        $("#pic9").fadeIn(500);
        $("#b15").fadeIn(2000);
        setTimeout(function(){$("#op0").fadeIn(1000);$("#op2").fadeIn(1000);$("#pic9").fadeOut(1000);$("#pic3").fadeIn(2000);},3000);
    });

    $("#op0").click(function op0(){
        f = 1;
        console.log('1')
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#op2").fadeOut(500);
        $("#b15").fadeOut(500);
        $("#b24").fadeOut(500);
        $("#b34").fadeOut(500);
        $("#b40").fadeOut(500);
        $("#b16").fadeIn(1500);
        $("#b16").click(function(){
            $("#b16").fadeOut(500);
            $("#b17").fadeIn(2000);
        });
        $("#b17").click(function(){
            $("#b17").fadeOut(500);
            $("#b18").fadeIn(2000);
        });
        $("#b18").click(function(){
            $("#b18").fadeOut(1000);
            $("#b19").fadeIn(2000);
        });
        $("#b19").click(function(){
            $("#b19").fadeOut(500);
            $("#b20").fadeIn(1000);
        });
        $("#b20").click(function(){
            $("#b20").fadeOut(500);
            $("#b21").fadeIn(500);
        });
        $("#b21").click(function(){
            $("#b21").fadeOut(500);
            $("#b22").fadeIn(1000);
        });
        $("#b22").click(function(){
            $("#b22").fadeOut(500);
            $("#b23").fadeIn(2500);
        });
        $("#b23").click(function(){
            $("#b23").fadeOut(500);
            $("#b24").fadeIn(2500);
        });
        $("#b24").click(function(){
            $("#b24").fadeOut(500);
            $("#op1").fadeIn(2500);
        });
    });
    $("#op1").click(function op1(){
        s = 1;
        console.log('2')
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#op2").fadeOut(500);
        $("#b15").fadeOut(500);
        $("#b24").fadeOut(500);
        $("#b34").fadeOut(500);
        $("#b40").fadeOut(500);
        $("#b25").fadeIn(1500);
        $("#b25").click(function(){
            $("#b25").fadeOut(500);
            $("#b26").fadeIn(2000);
        });
        $("#b26").click(function(){
            $("#b26").fadeOut(500);
            $("#b27").fadeIn(2000);
        });
        $("#b27").click(function(){
            $("#b27").fadeOut(500);
            $("#b28").fadeIn(2000);
        });
        $("#b28").click(function(){
            $("#b28").fadeOut(1000);
            $("#b29").fadeIn(2000);
        });
        $("#b29").click(function(){
            $("#b29").fadeOut(500);
            $("#b30").fadeIn(1000);
        });
        $("#b30").click(function(){
            $("#b30").fadeOut(500);
            $("#b31").fadeIn(1500);
        });
        $("#b31").click(function(){
            $("#b31").fadeOut(500);
            $("#b32").fadeIn(1000);
        });
        $("#b32").click(function(){
            $("#b32").fadeOut(500);
            $("#b33").fadeIn(2500);
        });
        $("#b33").click(function(){
            $("#b33").fadeOut(500);
            $("#b34").fadeIn(2500);
        });
    });
    $("#op2").click(function op2(){
        t = 1;
        console.log('3')
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#op2").fadeOut(500);
        $("#b15").fadeOut(500);
        $("#b24").fadeOut(500);
        $("#b34").fadeOut(500);
        $("#b40").fadeOut(500);
        $("#b35").fadeIn(1500);
        $("#b35").click(function(){
            $("#b35").fadeOut(500);
            $("#b36").fadeIn(2000);
        });
        $("#b36").click(function(){
            $("#b36").fadeOut(500);
            $("#b37").fadeIn(2000);
        });
        $("#b37").click(function(){
            $("#b37").fadeOut(500);
            $("#b38").fadeIn(2000);
        });
        $("#b38").click(function(){
            $("#b38").fadeOut(1000);
            $("#b39").fadeIn(2000);
        });
        $("#b39").click(function(){
            $("#b39").fadeOut(500);
            $("#b40").fadeIn(1000);
        });
        $("#b40").click(function(){
            $("#b40").fadeOut(500);
            $("#op1").fadeIn(2500);
        });
    });
    $("#b34").click(function(){
        $("#b34").fadeOut(500);
        $("#b41").fadeIn(2500);
    });
    $("#b41").click(function(){
        $("#b41").fadeOut(500);
        $("#b42").fadeIn(500);
    });
    $("#b42").click(function(){
        $("#b42").fadeOut(500);
        $("#b43").fadeIn(500);
    });
    $("#b43").click(function(){
        $("#b43").fadeOut(500);
        setTimeout(function(){$("#pic3").fadeOut(500);},3000);
        setTimeout(function(){window.location.href="32.html";},5000);
    });
});


