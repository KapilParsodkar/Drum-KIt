/*
document.querySelector("button").addEventListener("click",handleclick)

function handleclick(){
    alert("i got clicked")
}
*/
//detecting button press
let k=document.querySelectorAll(".drum").length
for(let i=0;i<k;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 /*
    let a= new Audio("sounds/tom-1.mp3")
    a.play()
*/
//this.style.color="white"
let b=this.innerHTML
sound(b)
animation(b)

})

}
//detecting  keyboard press
document.addEventListener("keydown",function(event){

 sound(event.key)
 animation(event.key)
})

function sound(key){
    switch (key) {
        case "w":  let a= new Audio("sounds/crash.mp3")
        a.play()
            
            break;
         case "a": let a1= new Audio("sounds/kick-bass.mp3")
         a1.play() 
         break
    
         case "s": let a2= new Audio("sounds/snare.mp3")
         a2.play() 
         break
    
         case "d": let a3= new Audio("sounds/tom-1.mp3")
         a3.play() 
         break
    
         case "j": let a4= new Audio("sounds/tom-2.mp3")
         a4.play() 
         break
    
         case "k": let a5= new Audio("sounds/tom-3.mp3")
         a5.play() 
         break
    
         case "l": let a6= new Audio("sounds/tom-4.mp3")
         a6.play() 
         break
    
        default:
            break;
    }
}


function animation(currentkey){
  let s=  document.querySelector("."+ currentkey)
  s.classList.add("pressed")

  setTimeout(function(){
    s.classList.remove("pressed")
  },100)
}