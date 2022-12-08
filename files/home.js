var log=0;
$(document).ready(function(){
    $("#menu-list li").hover(function(){
            $("this").animate({letterSpacing: "10px"},360);
        });
        $("#menu-button-hid").click(function(){
            $("#menu-hid").css({"z-index":"2"});
            $("#menu-list-hid").fadeIn("slow");
            $("body").css({"background-color":"rgb(179 153 88)","opacity":"0.7","transition":"0.8s"});
    
        });
    
        $("#exit-menu-hid").click(function(){
            $("#menu-list-hid").fadeOut("slow");
            $("body").css({"background-color": "rgba(179,153,88,0)","opacity":"1","transition":"0.8s"});
            $("#menu-hid").css({"z-index":"-1"});
        });
        $("#p1").click(function(){
            $("#non").fadeIn();
            $("#ge").fadeOut();
            $("#elec").fadeOut();
        });
        $("#p2").click(function(){
            $("#ge").fadeIn();
            $("#non").fadeOut();
            $("#elec").fadeOut();
        });
        $("#p3").click(function(){
            $("#elec").fadeIn();
            $("#ge").fadeOut();
            $("#non").fadeOut();
        });

});
