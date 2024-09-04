$(document).ready(function(){

    let isToggle = false;
    $(".navbar-toggler").click(function(){
        if(!isToggle){
            $("#menu-icon").attr("src", "assets/icons/close.svg")
            isToggle = true;
            $(".navbar").css({
                "-webkit-box-shadow": "0px 2px 5px 0px rgba(0,0,0,0.75)",
                "-moz-box-shadow": "0px 2px 5px 0px rgba(0,0,0,0.75)",
                "box-shadow": "0px 2px 5px 0px rgba(0,0,0,0.75)"
            });
        }
        else{
            $("#menu-icon").attr("src", "assets/icons/menu.svg")
            isToggle = false;
            $(".navbar").css("box-shadow", "none");
        }
    })
    
})