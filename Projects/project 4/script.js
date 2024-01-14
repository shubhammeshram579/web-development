const scroll = new LocomotiveScroll({
   el: document.querySelector('.main'),
   smooth: true
});

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


document.addEventListener("mousemove", function(dets){
   gsap.to(".curcer",{
      left: dets.x,
      top: dets.y
   })
})

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
})
