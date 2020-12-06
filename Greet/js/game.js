var Context = {
    canvas : null,
    context : null,
    create : function(canv_query){
       
        
        this.canvas = document.querySelector(canv_query);
        this.context = this.canvas.getContext('2d');
        return this.context;
    }
};



var Start = function(img_src, is_pattern){
    this.image = null;
    this.pattern = null;
    this.toRadians = Math.PI/180;


    if(img_src != null && img_src != undefined 
        && img_src != ""){
            this.image = new Image();
            this.image.src = img_src;

            if(is_pattern)
                this.pattern = Context.context.createPattern(this.image, 'repeat');
    }
    else
        console.log("Image unable to load");

    
    this.draw = (x,y,w,h)=>{
        if(this.pattern != null){
            Context.context.fillStyle = this.pattern;
            Context.context.fillRect(x,y,w,h);
        }
        else{
            if(w != undefined || h != undefined){
                Context.context.drawImage(this.image,x,y,
                                        w,
                                        h);
            }else{
                Context.context.drawImage(this.image,x,y,w,h);
            }
        }
    };
    this.rotate = (x,y,w,h,angle) => {
        Context.context.save();
        Context.context.translate(x+(w/2),y+(h/2));
        Context.context.rotate(angle * this.toRadians);
        Context.context.drawImage(this.image,
                                        -(w/2),
                                        -(h/2),w,h);
        Context.context.restore();
                        
    }

};



$(document).ready(() => {

    //initialize canvas
    Context.create('canvas');

    var START = './res/start.png',
    startRotate = new Start(START, false),
    startButton = new Start(START, false),

    ANGLE = 0;
    setInterval(function(){
        var startWidth = innerWidth/4,
        startHeight = innerWidth/6,
        startX = ((innerWidth/2) - (startWidth) + (startWidth/2)),
        startY = ((innerHeight/2) - (startHeight) + (startHeight/2));
    
        
        var myWidth = window.innerWidth - 5,
        myHeight = window.innerHeight - 5,
        bgColor = '#87ceeb';
        Context.context.canvas.width = myWidth;
        Context.context.canvas.height = myHeight;
        Context.context.fillStyle = bgColor;
        Context.context.fillRect(0,0,myWidth,myHeight);
        
        startButton.rotate(startX,startY,startWidth,startHeight, ANGLE);
        addEventListener('click',(e)=>{
            var pageX = e.pageX,
            pageY = e.pageY;
            
            if((innerWidth/2) - startWidth/2 < pageX && 
            (innerWidth/2) + startWidth/2 > pageX &&
            (innerHeight/2) - startHeight/2 < pageY && 
            (innerHeight/2) + startHeight/2 > pageY){
               startButton.rotate(startX,startY,startWidth,startHeight,ANGLE+=1);
            }
        });
        
        //startButton.draw(startX,startY,startWidth,startHeight);
    }, 25);
});