
$(document).ready(function(){
    var count=0,pt,dt;
    $("#menu-button").click(function(){
        $("#menu").css({"z-index":"2"});
        $("#menu-list").fadeIn("slow");
        $("#left").css({"background-color":"rgb(179 153 88)","opacity":"0.7","transition":"0.8s"});

    });

    $("#exit-menu").click(function(){
        $("#menu-list").fadeOut("slow");
        $("#left").css({"background-color": "#FEEAB7","opacity":"1","transition":"0.8s"});
        $("#menu").css({"z-index":"-1"});
    });

    $("#first").click(function(){
        $("#second").fadeIn("slow");
    });

    $("#second").click(function(){
        $("#t1").fadeIn(600);
        $("#t2").fadeIn(900);
        $(".navi").hide();
        $(".nav-tab").show();

    });
    $(".nav2").click(function(e){
        count+=1;
        e.preventDefault();
        if(count==1)
        {
            $(".b1").fadeIn(600);
            $(".b2").fadeIn(900);
            $(".b3").fadeIn(1200);
            $(".time1").hide();
            $(".TimeTextField").attr('disabled','disabled');
            var pick=$("#pass-pick").val();
            var drop=$("#pass-drop").val();
            pt=$("#pick-time").val();
            dt=$("#drop-time").val();
            $("#pick-lo").text(function(){return pick;});
            $("#drop-lo").text(function(){return drop;});
            $("#pick-t").text(function(){return pt;});
            $("#drop-t").text(function(){return dt;});
            
           
        }
        if(count==2){
            $("#booking").hide();
            $(".p11").fadeIn();
            $(".navi").fadeIn();
            $(".next1").hide();
            $(".pay-button").show();
            $(".upi").focus();

            var choice=$(".pass-radio:checked").val();
            choice=parseInt(choice);
            var choice_list={0:"Roadster",1:"Gear",2:"Electric"};

            $("#choic").text(function(){return choice_list[choice];});
            console.log(choice_list[choice]);

             // tarrif computation
             pt = pt.split(":");
             dt = dt.split(":");
             var startDate = new Date(0, 0, 0, pt[0], pt[1], 0);
             var endDate = new Date(0, 0, 0, dt[0], dt[1], 0);
             var diff = endDate.getTime() - startDate.getTime();
             var hours = Math.ceil(diff / 1000 / 60 / 60);
             var price=0;
             var cycle={0:[2,3,5],1:[4,5,7],2:[10,12,15]};
             var cyc_choice=cycle[choice];
                 if(hours<3){
                     price=hours*cyc_choice[0];
                 }
                 if(hours>2 && hours<=8)
                 {
                     price=2*cyc_choice[0]+(hours-2)*cyc_choice[1];
                 }
                 if(hours>8 && hours<=12)
                 {
                     price=2*cyc_choice[0]+6*cyc_choice[1]+(hours-8)*cyc_choice[3];
                 }
             console.log(cyc_choice[0]);
             $(".pay-right").append(function(){return price});
        }
    });

    $(".cred").click(function(){
        $("#cred-deb").show();
        $("#upi").hide();
    });
    $(".upi").click(function(){
        $("#upi").show();
        $("#cred-deb").hide();
    });


});
