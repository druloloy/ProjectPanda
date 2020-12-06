const bubbles = document.querySelectorAll('.hide');
const found = document.querySelector("header");

const resetPosition= (el) =>{
  el.style.transform = "translateY(0)";
}

    
window.onload = ()=>{
  let ctr = 0;
  let sc_height = window.innerHeight;
  
  setTimeout(()=>{
    found.style.top="0";
  },4500)
  setInterval(()=>{
    
    if(ctr===bubbles.length-3) 
    window.scrollTo(0,sc_height+5)
  
    resetPosition(bubbles[ctr]);
    ctr++;
  },5000)
}