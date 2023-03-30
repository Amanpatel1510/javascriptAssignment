let first=document.getElementById("onclick")
let second=document.getElementById("Doubleclick")
let mouseover=document.getElementById("mouseover")
let mouseout=document.getElementById("mouseout")
let Onkeypress=document.getElementById("onkeypress")
let keydown=document.getElementById("keydown")

first.addEventListener("click",()=>{
    first.innerText="Onclick"
})

second.addEventListener("dblclick",()=>{
   second.innerText="Doubleclick"
})

mouseover.addEventListener("mouseover",()=>{
    mouseover.innerText="Mouseover"
})

mouseout.addEventListener("mouseout" , ()=>{
    mouseout.innerText="MouseOut"
})
mouseout.addEventListener("mouseover" , ()=>{
    mouseout.innerText="4 :- If you will mouseout from here It will Change into mouseout "
})

Onkeypress.addEventListener("keypress" ,()=>{
Onkeypress.innerText="you have pressed key"
})

keydown.addEventListener("keydown", () =>{
    display.style.color = "red";
    keydown.innerText = " is keyDown";
  });

