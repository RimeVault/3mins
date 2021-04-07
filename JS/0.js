$(document).ready(function(){
    $("#poster").click(function(){
        $("#poster").fadeOut(1000);
        $("#intr").fadeOut(1000);
        $("#wata").fadeOut(1000);
        $("#BGM").fadeOut(1000); 
        setTimeout(function(){window.location.href="Pages/10.html"; }, 3000);
        console.log("Fade out, and turn to Page 1.")
    });
});



