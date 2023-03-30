
//here we select the Id
let decreatment=document.getElementById("decbtn")
let increament=document.getElementById("incbtn")
let resetbtn=document.getElementById("resbtn")
let displayValue=document.getElementById("result")


//decreamment

decreatment.addEventListener("click",()=>{
  const val=Number(displayValue.innerText)
  if (val>0){
    displayValue.innerText=val-1
  }
  else{
    alert("slelect atleast one product")
  }
})

//increament 
increament.addEventListener("click",()=>{
  const val=Number(displayValue.innerText)
  if (val<10){
    displayValue.innerText=val+1
  }
  else{
    alert("You have reached  Max Content")
  }
})

// reset
resetbtn.addEventListener("click",()=>{
  displayValue.innerText=0
})


/*
let decrementBtn=document.getElementById("decbtn")
let incrementBtn=document.getElementById("incbtn")
let resetBtn=document.getElementById("resbtn")
let displayValue=document.getElementById("result")

decrementBtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText)
    if (value >0){
      displayValue.innerText=value-1
    }
    else {
      alert("Negative value not allowed");
    }
})

incrementBtn.addEventListener("click",()=>{
  const value=Number(displayValue.innerText)
  if (value >=10){
    alert("10+ values are not allowed")
  }
  else(
    displayValue.innerText=value+1
  )
})

resetBtn.addEventListener("click", ()=>{
displayValue.innerText=0
})
*/
