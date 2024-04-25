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


// video effect
let imgbtn = document.querySelector(".page4 .card");
let playbtn = document.querySelector(".page4 .card2 .ri-play-fill");
let videobtn = document.querySelector(".page4 .card3")







 playbtn.addEventListener("click",function(){
    playbtn.style.display ="none";
    videobtn.style.display ="block";

 })


 videobtn.addEventListener("click",function(){
    playbtn.style.display ="block";
    videobtn.style.display ="none";
    playbtn.style.display= "flex";
    playbtn.style.transform = "translate(500%, 240%)";
   

 })

 var tl = gsap.timeline();
 tl.from(".page4 .card3 video",{
    y:1000,
    duration: 2,
    delay:1,
    scale: 0,
    stagger:1,
    // scrollTrigger: {
    //     trigger: ".page4",
    //     scroller: "body",
    //     start: "top 10%",
    //     end: "top 70%",
    //     scrub:true,
    //     markers:true
    //   },
 })

 










