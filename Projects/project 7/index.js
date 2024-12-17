// smooth scroling using LocomotiveScroll
function locoMotiveScrolling(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
 el: document.querySelector(".main"),
 smooth: true,
  mobile: {
     smooth: true
 },
 smoothMobile:true,
 tablet: {
     smooth: true
 },
 multiplier:0.7
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

locoMotiveScrolling();



let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide');

// Function to show the next slide
function showNextSlide() {
  // Hide the current slide
  slides[currentIndex].classList.remove('active');
  
  // Move to the next slide (loop back to the start if needed)
  currentIndex = (currentIndex + 1) % slides.length;

  // Show the new slide
  slides[currentIndex].classList.add('active');
}

// Start the slideshow
function startSlideshow() {
  slides[currentIndex].classList.add('active'); // Show the first slide
  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
}

startSlideshow();


// butten feature 
function ButtenEffectCrete(){
// click to open menu page
let menubtn = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav");
let navbar2Items = document.querySelector(".navItmes2");
let homebtn = document.querySelector("#home");
let xmarkbtn = document.querySelector(".fa-xmark");

menubtn.addEventListener("click", function(){
  navbar2Items.style.opacity = "1";
  navbar2Items.style.zIndex = "999"
  nav.style.zIndex = "99"
  nav.style.opacity = "0"
})


homebtn.addEventListener("click", function(){
  navbar2Items.style.opacity = "0";
  navbar2Items.style.zIndex = "99";
  nav.style.zIndex = "999"
  nav.style.opacity = "1";
})

xmarkbtn.addEventListener("click", function(){
  navbar2Items.style.opacity = "0";
  navbar2Items.style.zIndex = "-99";
  nav.style.zIndex = "999"
  nav.style.opacity = "1";
})


// hover effect insight page
let insigtBtn = document.querySelector("#Insight");
let insightPage = document.querySelector(".navcard2");

insigtBtn.addEventListener("mouseenter", function(){
  insightPage.style.opacity = 1;

})

insightPage.addEventListener("mouseleave", function(){
  insightPage.style.opacity = 0;
 
})


};
ButtenEffectCrete()



// gsap Animation

function aminimationEffect(){
let tl = gsap.timeline();

// nav landing page Animation
tl.from(".nav .logo , .fa-bars",{
  y:-100,
  duration:1,
  opacity:0,
  stagger:0.3

});

tl.from(".page1 .head1 , .head2",{
  y:100,
  duration:1,
  opacity:0,
  stagger:0.3

});



var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 70%",
      scrub:3,
  }
});


tl2.to(".nav",{
  height:"100px",
  duration:1,
  stagger: 1,
  backgroundColor: "#2b2929",
},"amite");


tl2.to(".page2",{
  duration:1,
  opacity:1,
  stagger: 0.5,
},"amite");


// video page
tl2.to(".page2 .video",{
  duration:1,
  // opacity:1,
  width:"95%",
  stagger: 5,
},"amite");



// story page3
tl.to(".page3",{
  // y:-10,
  backgroundColor: "#2b2929",
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    // markers:true,
    start:"top 10%",
    end:"top 50%",
    scrub:3,
}
});

tl.to(".page3 .container1 , .page3 .container2",{
  // y:-10,
  duration:1,
  opacity:1,
  stagger: 3,
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    // markers:true,
    start:"top 10%",
    end:"top 50%",
    scrub:3,
}
});

tl.to(".page3 .container2 p",{
  y: -200,
  duration: 10,  
  ease: 'none',  
  repeat: -1,
});


// page 5 service page
tl.from(".page5 .serviceCard1 .box ,.headingServive",{
  duration:1,
  opacity:0,
  stagger: 1,
  backgroundColor: "#111",
  scrollTrigger:{
    trigger:".page5",
    scroller:".main",
    // markers:true,
    start:"top 20%",
    end:"top 80%",
    scrub:3,
}
});

tl.from(".page5 .serviceCard2 .box",{
  duration:1,
  opacity:0,
  stagger: 5,
  scrollTrigger:{
    trigger:".page5 .serviceCard2",
    scroller:".main",
    // markers:true,
    start:"top 70%",
    end:"top 80%",
    scrub:3,
    
}

});


// page 6 other section
tl.from(".page6 .orSecItems ,.otherhead",{
  y:-100,
  duration:1,
  opacity:0,
  stagger: 5,
  scrollTrigger:{
    trigger:".page6",
    scroller:".main",
    // markers:true,
    start:"top 60%",
    end:"top 100%",
    scrub:3,
}

});

}

aminimationEffect()




