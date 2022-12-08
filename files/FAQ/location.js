$(document).ready(function(){
    $("#menu-button").click(function(){
        $("#menu-list").fadeIn("slow");
    });

    $("#exit-menu").click(function(){
        $("#menu-list").fadeOut("slow");
    });

    $("#first").focusout(function(){
        $("#second").fadeIn("slow");
    });

    $("#second").focusout(function(){
        $(".b1").fadeIn(600);
        $(".b2").fadeIn(900);
        $(".b3").fadeIn(1200);
    })
});