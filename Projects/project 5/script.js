// let cards = document.querySelector(".page3 .card2 .card");
// let cardimg = document.querySelector(".page3 .card2 .card img");

// cards.addEventListener("mousemove",function(dent){
//     cardimg.style.left = dent.x + "px"
//     cardimg.style.top  = dent.y + "px"

// })

// cards.addEventListener("mouseenter",function(){
//     cardimg.style.opacity = 1
// })
// cards.addEventListener("mouseleave",function(){
//     cardimg.style.opacity = 0
// })


let cards = document.querySelectorAll(".page3 .card2 .card");
let cardimg = document.querySelectorAll(".page3 .card2 .card img");

cards.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
        val.childNodes[3].style.transition ="linear 0.3s"
    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
        val.childNodes[3].style.transition ="linear 0.3s"
    })


    val.addEventListener("mousemove",function(dent){
        val.childNodes[3].style.left = dent.x + "px"
        val.childNodes[3].style.top = dent.y + "px"
    })
})









