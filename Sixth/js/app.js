const TextAnimate = {
    textToChange: null,
    loadTexts: [],
    getTextElement: function(query=this.textToChange){
        return document.querySelector(query);
    },
    changeText: function(query, text){
        return this.getTextElement(query).innerHTML = text;
    },
    timedText: function(query=this.textToChange, text, timeout){
       setTimeout(() => {
          this.changeText(query, text) 
       }, timeout);
    },
    timedMessage: function(query=this.textToChange, timeout=3000){
        const arr = this.loadTexts;
        let ctr = 1;
       arr.map(text=>{
            this.timedText(query=this.textToChange,text,timeout*ctr++);
        });
    },
    countUp: function(query=this.textToChange, limit, callback){
        let ctr = 0;
        let interval = 100;
        const countup = setInterval(()=>{
            this.changeText(query,ctr);
            if(++ctr>limit){
                clearInterval(countup);
                this.timedMessage(query);
            }
        },interval);
        
    }
};
TextAnimate.textToChange = "#text-container";
TextAnimate.loadTexts = ["Hello, Panda!", "This is not so much","and I made it in a little rush.",
"I just feel making this kind of cheesy surprise again.", "I love you as always,","and I know that'll never change.","So always take care and keep yourself safe.","That's all, nothing much.", "I Love You!<br><br> ~ Monkey<br><br>&#x2764;",];

window.addEventListener('load',()=>{ 
    /*setInterval(() => {
        TextAnimate.timedText("#text-container","Lmfao",3000);
        TextAnimate.timedText("#text-container","mthfckr",6000);
        TextAnimate.timedText("#text-container","lol",9000);
    }, 3000);*/


    
    TextAnimate.countUp(TextAnimate.textToChange,183);
});