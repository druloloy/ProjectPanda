var loop;
var degrees = 0;

function rotateAnimation(el,speed){
    var element = document.getElementById(el);

    element.style.transform = "rotateY("+degrees+"deg)";

    loop = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
    degrees++;
    if(degrees > 360){
        degrees = 1;
    }
}

function pandaClick(){
    let pandaIcon = $("#pandaImage");
    let frontCard = $(".panda-container");
    let trigger = false;
    //disappear icon
    pandaIcon.css({
        "transition": "1000ms ease-in-out",
        "opacity": "0"
    });

    frontCard.css({
        "transition":"1500ms ease-in-out",
        "transform":"translate(0,450px)",
    });

    setTimeout(function(){
        frontCard.css({
            "transition":"1500ms ease-in-out",
            "transform":"translate(-250px,-30px)",
            "z-index":"-1"
        });
    },3000)
}


window.onload = function(){
    rotateAnimation("pandaImage",1);


    $("#pandaImage").click(function(){
        pandaClick();
    });


}
