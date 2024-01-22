function locoscrollani(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

locoscrollani();

function navscrollanimation(){
   gsap.to(".nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
   
   gsap.to(".nav-part2 .link", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
};

navscrollanimation();







function videoconanimation(){
   var videocon = document.querySelector(".video-contener");
var playbtn = document.querySelector(".play");

videocon.addEventListener("mouseenter",function(){
   gsap.to(playbtn,{
    scale: 1,
    opacity: 1
   })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
     scale: 0,
     opacity: 0
    })
 })

 videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left: dets.x-50,
        top: dets.y-50
    })

    })

}

videoconanimation();



function loadingani(){
   gsap.from(".page1 h1",{
      y:100,
      opacity:0,
      delay: 0.5,
      duration:0.7,
      stagger:0.3
   })

   gsap.from(".page1 .video-contener",{
      scale: 0.9,
      opacity:0,
      delay: 1.5,
      duration:0.5,
   })

} 


loadingani();


function circulanimation(){
document.addEventListener("mousemove", function(dets){
   gsap.to(".curcer",{
      left: dets.x,
      top: dets.y
   })
})

var imgchild = document.querySelectorAll(".child");

imgchild.forEach(function(val){
   val.addEventListener("mouseenter",function(){
      gsap.to(".curcer",{
               transform: 'translate(-50%,-50%) scale(1)'
            })
   })

   val.addEventListener("mouseleave",function(){
      gsap.to(".curcer",{
               transform: 'translate(-50%,-50%) scale(0)'
            })
   })
});
};

circulanimation();

function menubaranimation(){
var menubar = document.querySelector(".menu");
var menubtn = document.querySelector(".nav button  .ri-menu-line");
var logoimg = document.querySelector(".nav-part1 #svg1");
var logoimg2 = document.querySelector(".nav-part1 .svg2");


var a = 0
menubtn.addEventListener("click",function(){
   if(a === 0){
   menubar.style.opacity = 1;
   menubar.style.zIndex = "10"
   menubtn.style.fontSize = "25px"
   logoimg.style.color = "#fff"
   logoimg2.style.color = "#fff"

   a = 1
}else{
   menubar.style.opacity = 0;
   menubar.style.zIndex = "0"
   menubtn.style.fontSize = "20px"
   logoimg.style.color = "#111"
   logoimg2.style.color = "#111"
   a = 0
}
});



var cardbtn = document.querySelector(".nav button  .ri-shopping-cart-2-line");
var cardbar = document.querySelector(".card-details");



var a = 0
cardbtn.addEventListener("click",function(){
   if(a === 0){
      cardbar.style.opacity = 1;
      cardbar.style.zIndex = "10"
      cardbar.style.fontSize = "25px"
      logoimg.style.color = "#fff"
      logoimg2.style.color = "#fff"

   a = 1
}else{
   cardbar.style.opacity = 0;
   cardbar.style.zIndex = "0"
   cardbar.style.fontSize = "20px"
   logoimg.style.color = "#111"
   logoimg2.style.color = "#111"
   a = 0
}
});
};

menubaranimation();




// document.querySelector("#child1").addEventListener("mouseenter",function(){
//    gsap.to(".curcer",{
//       transform: 'translate(-50%,-50%) scale(1)'
//    })

// })


// document.querySelector("#child1").addEventListener("mouseleave",function(){
//    gsap.to(".curcer",{
//       transform: 'translate(-50%,-50%) scale(0)'
//    })

// })





function imgscrollinganimation(){
gsap.to(".page3 .child", {
   transition: "all ease-in 1s",
   opacity: 1,
   scrollTrigger: {
     trigger: ".page3",
     scroller: ".main",
     start: "top 30%",
     end: "top 40%",
     scrub: true,
   },
 });



 gsap.to(".page6 .imagcon svg", {
   transition: "all ease-in 1s",
   opacity: 1,
   scrollTrigger: {
     trigger: ".page6",
     scroller: ".main",
     start: "top 65%",
     end: "top 70%",
     scrub: true,
   },
 });
};

imgscrollinganimation();






