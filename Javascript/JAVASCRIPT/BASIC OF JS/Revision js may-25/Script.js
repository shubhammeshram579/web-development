

let cercul = document.querySelector(".cercel")
let offbtn = document.querySelector(".off")
let onbtn = document.querySelector(".on")


offbtn.addEventListener("click",function(){
    cercul.style.backgroundColor = "yellow"
})


onbtn.addEventListener("click",function(){
    cercul.style.backgroundColor = "#dddd"
})