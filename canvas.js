var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "#111";
var context = canvas.getContext('2d');

function Circle(x,y,r,dx,dy){
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;

    this.draw = function(){
        context.beginPath();
        context.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        context.strokeStyle = '#fff';
        context.stroke();
    }
    this.update = function(){
        if(this.y + this.r > innerHeight || this.y - this.r < 0){
            this.dy = -this.dy;
        }
        if(this.x + this.r > innerWidth || this.x - this.r < 0){
            this.dx = -this.dx;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}    
var circleArray = [];
var ms = 60000;
for(var i = 0; i < ms;i++){
    var r = 30;
    var x = Math.random() * (innerWidth - r * 2) + r;
    var y = Math.random() * (innerHeight - r * 2) + r;
    var dx = Math.random() - .5;
    var dy = Math.random() - .5;

    circleArray.push(new Circle(x,y,r,dx,dy));
}



var circle = new Circle(x,y,30,dx,dy);

function animateObject(){
    requestAnimationFrame(animateObject);
    context.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i = 0;i < ms;i++){
        if(i > 4000){
            circleArray[i].update();
           
        } 
    console.log(i);
    }

}
animateObject();