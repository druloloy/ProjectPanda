var loop;
var degrees = 0;

function rotateAnimation(el,speed){
    var element = document.getElementById(el);

    element.style.transform = "rotateY("+degrees+"deg)";

    loop = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
    degrees++;
    if(degrees > 359){
        degrees = 1;
    }
}

function pandaClick(){
    let pandaIcon = $("#pandaImage");
    let frontCard = $(".panda-container");
    let backCard = $(".message-card-container");
    let text = $(".card-message h1");
    let greet = $(".card-message p");
    
    $(document).ready(function(){
        
        //disappear icon
        
        pandaIcon.css({
            "transition": "1000ms ease-in-out",
            "-webkit-transition": "1000ms ease-in-out",
            "-moz-transition": "1000ms ease-in-out",
            "opacity": "0"
        });

        //move down front card

        frontCard.css({
            "transition":"1500ms ease-in-out",
            "transform":"translate(0,100%)",
            "-webkit-transition":"1500ms ease-in-out",
            "-webkit-transform":"translate(0,100%)",
            "-moz-transition":"1500ms ease-in-out",
            "-moz-transform":"translate(0,100%)",
        });

        //display back card

        backCard.css({
                "transition":"500ms ease-in-out",
                "-webkit-transition":"500ms ease-in-out",
                "-moz-transition":"500ms ease-in-out",
                "opacity":"1",
                "z-index":"-2"
        }); 
        setTimeout(function(){
            frontCard.css({
                "transition":"1500ms ease-in-out",
                "transform":"translate(-250px,-30px)",
                "-webkit-transition":"1500ms ease-in-out",
                "-webkit-transform":"translate(-250px,-30px)",
                "-moz-transition":"1500ms ease-in-out",
                "-moz-transform":"translate(-250px,-30px)",
                "z-index":"-3"
            });
        },1500);
        setTimeout(function(){
            text.css({
                "font-family":"Unicorn",
                "font-size":"50px"
            });
            setTimeout(() => {
                text.html("Hello there!");
            }, 1000);
            setTimeout(() => {
                text.html("This will only take a few seconds.");
            }, 3000);
            setTimeout(() => {
                text.html("i just want to say that...");
            }, 5000);
            setTimeout(() => {
                text.html("life will go hard on us,");
            }, 7000);
            setTimeout(() => {
                text.html("but I know we can do it together.");
            }, 9000);
            setTimeout(() => {
                text.html("Thank you and remember that . . .");
            }, 11000);
            $(document).ready(function(){
                setTimeout(() => {
                    text.css({
                        "font-family":"Avocado",
                        "font-size":"70px"
                    });
                    text.html("I will always love you!");
                    setTimeout(()=>{
                        greet.css({
                            "font-family":"Unicorn",
                            "font-size":"20px"
                        });
                        greet.html("from your Monkey");
                        init_hearts();
                    },1000);
                }, 14000);
            });
        },3000);
    });
}


window.onload = function(){
    rotateAnimation("pandaImage",10);

    $("#pandaImage").click(function(){
       pandaClick();
    });

}



function init_hearts(){
    var canvas = document.querySelector('canvas');
    var w = innerWidth - 5;
    var h = innerHeight - 5;
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = w;
    ctx.canvas.height = h;

    ctx.fillRect(0,0,w,h);

    var heartSize = 70;
    var heartImg = new Image();
    heartImg.src = './res/heart.png';
    var heartPop = (Math.ceil(w/heartSize) * 2) + 10;
    console.log(heartPop);
    var heart = [];

    for(var i = 0;i < heartPop; i++){
        var x = Math.floor(Math.random()*w);
        var y = -(Math.floor(Math.random()*h));
        var dx = (Math.random()*2) - .5;
        var dy = 2;

        var limit = Math.floor(Math.random()*w/2);

        heart[i] = new Heart(x,y,dx,dy,limit);
    }

    function Heart(x,y,dx,dy,limit){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.limit = limit;

        var currX = x;

        this.fall = function(){
            
            if(this.x > (currX+limit) || this.x < (currX-limit)){
                this.dx = -this.dx;
            }

            if(this.y > innerHeight){
                this.y = -(Math.floor(Math.random()*h));
            }

            this.y += this.dy;
            this.x += this.dx;
        }
        this.show = function(){
            ctx.drawImage(heartImg,this.x,this.y,70,70);
            this.fall();
        }
    }

    function update(){
        requestAnimationFrame(update);
        ctx.clearRect(0,0,w,h);
        for(var i = 0; i < heartPop; i++){
            heart[i].show();
        }

    }
    update();
}