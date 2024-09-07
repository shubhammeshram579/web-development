import {gsap} from "gsap"


const img = document.querySelectorAll(".cardImg");
const carditem = document.querySelectorAll(".hoverEffect");
const savebtn = document.querySelectorAll(".SaveBtn");
const selectbtn = document.querySelectorAll(".selectbtn");
const postcard = document.querySelectorAll(".postcard");


// postcard.forEach(function(val){
//     console.log("val",val.children)
//     val.addEventListener("mouseenter",function(){
//         val.children[1].style.opacity = 1
//         val.children[2].style.opacity = 1
//         val.children[0].style.filter = "blur(2px)"
       
//     })

//     val.addEventListener("mouseleave",function(){
//         val.children[1].style.opacity = 0
//         val.children[2].style.opacity = 0
//         val.children[0].style.filter = "none"
//     })
// })



// // single selection
// postcard.addEventListener("mouseenter",function(){
//     savebtn.style.opacity = 1
//     selectbtn.style.opacity = 1
//     img.style.filter = "blur(1px)"
// })


// postcard.addEventListener("mouseleave",function(){
//     savebtn.style.opacity = 0
//     selectbtn.style.opacity = 0
//     img.style.filter = "none"
// })




// function homePageAnimationEffect(){
//     var tl = gsap.timeline();
//     tl.from(".carousel .carousel-cell h1",{
//         y:-100,
//         duration:2,
//         // opacity:0,
//         stagger:1
//     })

    
// }


// homePageAnimationEffect()