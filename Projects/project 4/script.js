function locoscrollani(){
   gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
   mobile: {
      smooth: true
  },
  tablet: {
      smooth: true
  }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

};

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
   
   gsap.to(".nav-part2 .link a", {
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


function imgscrollinganimation(){
   gsap.to(".page3 .child", {
      transition: "all ease-in 0.3s",
      opacity: 1,
      // duration:1,
      // delay:1,
      scrollTrigger: {
        trigger: ".page3 .child",
        scroller: ".main",
        start: "top 20%",
        end: "top 50%",
        scrub:1,
      //   markers:true
      },
    });

   gsap.to(".page3 .child2", {
      transition: "all ease-in 0.3s",
      opacity: 1,
      // duration:1,
      // delay:1,
      scrollTrigger: {
        trigger: ".page3 .child2",
        scroller: ".main",
        start: "top 20%",
        end: "top 50%",
        scrub:1,
      //   markers:true
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
        scrub: 1,
      //   markers:true
      },
    });
   };
   
   imgscrollinganimation();
   

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
var menubtn = document.querySelector(".ri-menu-line");
var logoimg = document.querySelector(".nav-part1 #svg1");
var logoimg2 = document.querySelector(".nav-part1 .svg2");


var a = 0
menubtn.addEventListener("click",function(){
   if(a === 0){
   menubar.style.opacity = 1;
   menubar.style.zIndex = "998"
   menubtn.style.fontSize = "25px"
   logoimg.style.color = "#fff"
   logoimg2.style.color = "#fff"
   a = 1
}else{
   menubar.style.opacity = 0;
   menubar.style.zIndex = "-40"
   menubtn.style.fontSize = "20px"
   logoimg.style.color = "#111"
   logoimg2.style.color = "#111"
   a = 0
}
});






var cardbtn = document.querySelector(".ri-shopping-cart-2-line");
var cardbar = document.querySelector(".card-details");



var a = 0
cardbtn.addEventListener("click",function(){
   if(a === 0){
      cardbar.style.opacity = 1;
      cardbar.style.zIndex = "998"
      cardbtn.style.fontSize = "25px"
      logoimg.style.color = "#fff"
      logoimg2.style.color = "#fff"

   a = 1
}else{
   cardbar.style.opacity = 0;
   cardbar.style.zIndex = "-41"
   cardbtn.style.fontSize = "20px"
   logoimg.style.color = "#111"
   logoimg2.style.color = "#111"
   a = 0
}
});
};

menubaranimation();



function hovertopageanimation(){
var boxcaon = document.querySelectorAll(".contener1 .dets");
var boximg = document.querySelectorAll(".contener1 .box img");
var boxtext = document.querySelectorAll(".contener1 .box2 h5");


boxcaon.forEach(function(val){
   val.addEventListener("mouseenter",function(){
      boximg.forEach(function(box){
         box.style.opacity = 1;
      })
      boxtext.forEach(function(box2){
         box2.style.opacity = 1;
      })
   
   })

   val.addEventListener("mouseleave",function(){
      boximg.forEach(function(box){
         box.style.opacity = 0;
      })
      boxtext.forEach(function(box2){
         box2.style.opacity = 0;
      })
   
   })
   
   
})





var boxcaon2 = document.querySelectorAll(".cotener2 .dets");
var boximg2 = document.querySelectorAll(".cotener2 .box img");
var boxtext2 = document.querySelectorAll(".cotener2 .box2 h5");


boxcaon2.forEach(function(val){
   val.addEventListener("mouseenter",function(){
      boximg2.forEach(function(box){
         box.style.opacity = 1;
      })
      boxtext2.forEach(function(box2){
         box2.style.opacity = 1;
      })
   
   })

   val.addEventListener("mouseleave",function(){
      boximg2.forEach(function(box){
         box.style.opacity = 0;
      })
      boxtext2.forEach(function(box2){
         box2.style.opacity = 0;
      })
   
   })
   
   
});



var boxcaon3 = document.querySelectorAll(".contener3 .dets");
var boximg3 = document.querySelectorAll(".contener3 .box img");
var boxtext3 = document.querySelectorAll(".contener3 .box2 h5");


boxcaon3.forEach(function(val){
   val.addEventListener("mouseenter",function(){
      boximg3.forEach(function(box){
         box.style.opacity = 1;
      })
      boxtext3.forEach(function(box2){
         box2.style.opacity = 1;
      })
   
   })

   val.addEventListener("mouseleave",function(){
      boximg3.forEach(function(box){
         box.style.opacity = 0;
      })
      boxtext3.forEach(function(box2){
         box2.style.opacity = 0;
      })
   
   })
   
   
})
};

hovertopageanimation();




