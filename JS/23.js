var choice = 0;

$(document).ready(function(){
    setTimeout(function(){$("#pic1").fadeIn(1000);}, 500);
    setTimeout(function(){$("#pic1").fadeOut(1000);$("#pic2").fadeIn(2000);}, 4000);
    setTimeout(function(){$("#b01").fadeIn(2000);}, 8000);
    
    $("#b01").click(function(){
        $("#b01").fadeOut(500);
        $("#b02").fadeIn(1000);
    });
    $("#b02").click(function(){
        $("#b02").fadeOut(500);
        $("#b03").fadeIn(1000);
    });
    $("#b03").click(function(){
        $("#b03").fadeOut(500);
        setTimeout(function(){$("#b04").fadeIn(2000);}, 3000);
    });
    $("#b04").click(function(){
        $("#b04").fadeOut(500);
        setTimeout(function(){$("#pic2").fadeOut(500);$("#pic3").fadeIn(1000);$("#b05").fadeIn(500);}, 2000);
    });
    $("#b05").click(function(){
        $("#b05").fadeOut(500);
        setTimeout(function(){$("#pic2").fadeOut(500);$("#pic3").fadeIn(1000);$("#b06").fadeIn(500);}, 2000);
        setTimeout(function(){console.log("Shake");
        for (let i=0;i<5;i++)
        {
            $("#b06").animate({top:'60px'},20).animate({left:'30px'},20).animate({left:'0px'},20).animate({top:'-10px'},40);
        }}, 2500);
    });
    $("#b06").click(function(){
        $("#b06").fadeOut(500);
        setTimeout(function(){$("#b07").fadeIn(500);}, 2000);
    });
    $("#b07").click(function(){
        $("#b07").fadeOut(500);
        setTimeout(function(){$("#b08").fadeIn(500);}, 2000);
        setTimeout(function(){console.log("Shake");
        for (let i=0;i<4;i++)
        {
            $("#b08").animate({top:'60px'},20).animate({left:'30px'},20).animate({left:'0px'},20).animate({top:'-10px'},40);
        }}, 2500);
    });
    $("#b08").click(function(){
        $("#b08").fadeOut(500);
        setTimeout(function(){$("#b09").fadeIn(500);}, 2000);
        setTimeout(function(){$("#op0").fadeIn(1000);$("#op1").fadeIn(1000);},4000);
    });

    $("#op0").click(function(){
        localStorage.removeItem('ex');
        localStorage.setItem('ex','no'); 
        console.log(localStorage.getItem('ex'));
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#op2").fadeOut(500);
        $("#op3").fadeOut(500);
        $("#op4").fadeOut(500);
        $("#op5").fadeOut(500);
        $("#pic4").fadeOut(500);
        $("#b09").fadeOut(500);
        $("#b13").fadeOut(500);
        $("#b16").fadeOut(500);
        $("#b23").fadeOut(500); 
        setTimeout(function(){$("#pic3").fadeOut(1000);$("#pic7").fadeIn(2000);}, 3000);
        setTimeout(function(){$("#b10").fadeIn(2000);}, 5000);
        $("#b10").click(function(){
            $("#b10").fadeOut(500);
            setTimeout(function(){$("#pic7").fadeOut(1000);$("#pic8").fadeIn(2000);}, 2000);
            setTimeout(function(){$("#pic8").fadeOut(1000);}, 4000);
            setTimeout(function(){window.location.href="24.html"; }, 7000);
        });
    });

    $("#op1").click(function(){
        $("#op0").fadeOut(500);
        $("#op1").fadeOut(500);
        $("#b09").fadeOut(500);
        setTimeout(function(){$("#pic3").fadeOut(1000);$("#pic4").fadeIn(2000);}, 3000);
        setTimeout(function(){$("#b11").fadeIn(2000);}, 5000);
        $("#b11").click(function(){
            $("#b11").fadeOut(500); 
            $("#b12").fadeIn(1000);
        });
        $("#b12").click(function(){
            $("#b12").fadeOut(500); 
            $("#b13").fadeIn(1000);
            setTimeout(function(){$("#op0").fadeIn(1000);$("#op2").fadeIn(1000);},3000);
        });
        $("#op2").click(function(){
            $("#b13").fadeOut(500); 
            $("#op0").fadeOut(500); 
            $("#op2").fadeOut(500); 
            $("#b14").fadeIn(1000);
        });
        $("#b14").click(function(){
            $("#b14").fadeOut(500); 
            $("#b15").fadeIn(1000);
        });
        $("#b15").click(function(){
            $("#b15").fadeOut(500); 
            $("#b16").fadeIn(1000);
            setTimeout(function(){$("#op0").fadeIn(1000);$("#op3").fadeIn(1000);},3000);
        });
        $("#op3").click(function(){
            $("#b16").fadeOut(500); 
            $("#op0").fadeOut(500); 
            $("#op3").fadeOut(500); 
            $("#b17").fadeIn(1000);
        });
        $("#b17").click(function(){
            $("#b17").fadeOut(500); 
            $("#b18").fadeIn(1000);
        });
        $("#b18").click(function(){
            $("#b18").fadeOut(500); 
            $("#b19").fadeIn(1000);
        });
        $("#b19").click(function(){
            $("#b19").fadeOut(500); 
            $("#b20").fadeIn(1000);
        });
        $("#b20").click(function(){
            $("#b20").fadeOut(500); 
            $("#b21").fadeIn(1000);
        });
        $("#b21").click(function(){
            $("#b21").fadeOut(500); 
            $("#b22").fadeIn(1000);
        });
        $("#b22").click(function(){
            $("#b22").fadeOut(500); 
            $("#b23").fadeIn(1000);
            setTimeout(function(){$("#op0").fadeIn(1000);$("#op4").fadeIn(1000);},3000);
        });
        $("#op4").click(function(){
            $("#b23").fadeOut(500); 
            $("#op0").fadeOut(500); 
            $("#op4").fadeOut(500); 
            $("#b24").fadeIn(1000);
        });
        $("#b24").click(function(){
            $("#b24").fadeOut(500); 
            $("#tip").fadeIn(1000);
            setTimeout(function(){$("#b25").fadeIn(1000);$("#tip").fadeOut(1000);},3000);
        });
        $("#b25").click(function(){
            $("#b25").fadeOut(500); 
            $("#b26").fadeIn(1000);
        });
        $("#b26").click(function(){
            $("#b26").fadeOut(500); 
            $("#b27").fadeIn(1000);
        });
        $("#b27").click(function(){
            $("#b27").fadeOut(500); 
            $("#b28").fadeIn(1000);
        });
        $("#b28").click(function(){
            $("#b28").fadeOut(500); 
            $("#b29").fadeIn(2000);
            setTimeout(function(){console.log("Shake");
            for (let i=0;i<20;i++)
            {
                $("#b29").animate({top:'6px'},20).animate({left:'3px'},20).animate({left:'0px'},20).animate({top:'8px'},40);
            }}, 2000);
        });
        $("#b29").click(function(){
            $("#b29").fadeOut(500); 
            $("#b30").fadeIn(1000);
        });
        $("#b30").click(function(){
            $("#b30").fadeOut(100); 
            $("#pic4").fadeOut(100);
            setTimeout(function(){$("#b31").fadeIn(500);},1000);
            setTimeout(function(){$("#b31").fadeOut(500);$("#pic5").fadeIn(100);},3000);
            setTimeout(function(){$("#b32").fadeIn(1000);},5000);
        });
        $("#b32").click(function(){
            $("#b32").fadeOut(500); 
            $("#pic4").fadeOut(500);
            setTimeout(function(){$("#b33").fadeIn(1000);$("#pic6").fadeIn(1000);},2000);
            localStorage.removeItem('ex');
            localStorage.setItem('ex','yes'); 
            console.log(localStorage.getItem('ex'));
            setTimeout(function(){window.location.href="24.html"; }, 14000);
        });
    });

});



