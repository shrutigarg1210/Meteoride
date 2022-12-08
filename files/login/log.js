$(document).ready(function(){
    var k=0;
    $("#submit").click(function(e){
        e.preventDefault();
        if("abc@chitkara.edu.in" === $("#email").val()){
            k++;
        }
        if("123456" === $("#password").val())
        {
            k++;
        }
        if(k<2){
            alert("wrong email or password");
        }
        else{
            console.log("1");
            $("#log").text("1");
            location.replace("./../home.html")
        }
    });
});