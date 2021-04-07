$(document).ready(function(){
    setTimeout(function(){$("#intr1").fadeIn(1000);}, 3000);
    $("#intr1").click(function(){
        $("#intr1").fadeOut(500);
        setTimeout(function(){$("#intr2").fadeIn(2000);},1000);
    });
    $("#intr2").click(function(){
        $("#intr2").fadeOut(500);
        setTimeout(function(){$("#pic1").fadeIn(2000);},500);
        setTimeout(function(){$("#pic1").fadeOut(2000);$("#pic2").fadeIn(2000);},3000);
        setTimeout(function(){$("#pic2").fadeOut(2000);$("#pic3").fadeIn(2000);},6000);
        setTimeout(function(){$("#pic3").fadeOut(2000);$("#pic4").fadeIn(2000);},8000);
        setTimeout(function(){$("#pic4").fadeOut(2000);$("#pic5").fadeIn(2000);},11000);
        setTimeout(function(){$("#pic5").fadeOut(2000);$("#pic6").fadeIn(2000);},13000);
        setTimeout(function(){$("#pic6").fadeOut(2000);},15000);
        setTimeout(function(){window.location.href="20.html";},31000);
    });
});



