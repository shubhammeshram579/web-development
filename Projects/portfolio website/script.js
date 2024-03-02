function locoscrollani(){
    gsap.registerPlugin(ScrollTrigger);
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector(".main"),
   smooth: true
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
 
 
 }
 
//  locoscrollani();




// skills btn feature creation 
const skillsbtn = document.querySelector(".page2 .card3 #skills");
const expbtn = document.querySelector(".page2 .card3 #Experience");
const edubtn = document.querySelector(".page2 .card3 #Education");

const skillssection = document.querySelector(".page2 .card4");
const ExpSection = document.querySelector(".page2 .card5");
const EduSection = document.querySelector(".page2 .card6");



skillsbtn.addEventListener("click",function(){
    skillssection.style.opacity = "1"
    ExpSection.style.opacity = "0"
    EduSection.style.opacity = "0"
    skillsbtn.style.borderBottom =  "3px solid rgb(160, 128, 21)"
    edubtn.style.borderBottom =  "none"
    expbtn.style.borderBottom =  "none"

})

expbtn.addEventListener("click",function(){
        skillssection.style.opacity = "0"
    ExpSection.style.opacity = "1"
    EduSection.style.opacity = "0"
    skillsbtn.style.borderBottom =  "none"
    edubtn.style.borderBottom =  "none"
    expbtn.style.borderBottom =  "3px solid rgb(160, 128, 21)"
})



edubtn.addEventListener("click",function(){
    skillssection.style.opacity = "0"
    ExpSection.style.opacity = "0"
    EduSection.style.opacity = "1"
    skillsbtn.style.borderBottom =  "none"
    edubtn.style.borderBottom =  "3px solid rgb(160, 128, 21)"
    expbtn.style.borderBottom =  "none"
    
})



// navbar click then scroll pages effect 

let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("nav a");


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
   
};


// animation effect using gsap
// home page animation 

var tl = gsap.timeline();
tl.from("nav .logo, nav .navbarname a",{
    y:-100,
    duration:0.5,
    opacity:0,
    stagger:0.3

});

gsap.from(".contaner .card img",{
    x:-100,
    duration:3,
    opacity:0,
    scale:0.1
    // stagger:1

});

tl.from(".contaner .card2 .hello",{
    x:-100,
    duration:0.5,
    opacity:0,
    // stagger:2

});


tl.from(".contaner .card2 .name",{
    x:100,
    duration:0.5,
    opacity:0,
    // stagger:3

});

tl.from(".contaner .card2 .job",{
    x:-100,
    duration:0.5,
    opacity:0,
    // stagger:3

});

tl.from(".contaner .card2 a",{
    x:100,
    duration:0.5,
    opacity:0,
    // stagger:3

});



// anout page animation
tl.to(".page2,.page2 img,.page2 .card2",{
    transition: "all ease 1s",
    opacity: 1,
    trigger:1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 10%",
        end: "top 35%",
        scrub:true,
        // markers:true
      },
    
})


// project page animation
tl.to(".page3 .card1, .page3 h1, .page3 .more",{
    transition: "all ease 1s",
    opacity: 1,
    stagger:2,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 25%",
        end: "top 35%",
        scrub: 4,
        // markers:true
      },
    
})


// navbar 
gsap.to(".nav", {
    backgroundColor: "#111",
    duration: 0.5,
    height: "35px",
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });



//   mousemove feature
  const cbtn = document.querySelector(".cursul");
  const body = document.querySelector("body");

  const cv = document.querySelectorAll(".contaner a");

  document.addEventListener("mousemove", function(dets){
    gsap.to(".cursul",{
       left: dets.x,
       top: dets.y,
       transform:"translate(-50%,-50%)"
    })
 })



 
 cv.forEach(function(val){
  val.addEventListener("mouseenter",function(){
    cbtn.style.zIndex = "-99"
   }
   )

   val.addEventListener("mouseleave",function(){
    cbtn.style.zIndex = "0"
   }
   )

 })









 const mbtn =document.querySelector("nav .fa-bars");
 const xbtn =document.querySelector("nav .fa-xmark");

const navmenu =  document.querySelector(".manubar2");


mbtn.addEventListener("click",function(){
  navmenu.style.opacity = 1;
  navmenu.style.zIndex = 99;
  navmenu.style.transition = "all ease 1s";
  mbtn.style.opacity = 0;
  xbtn.style.opacity = 1;

})


xbtn.addEventListener("click",function(){
  navmenu.style.opacity = 0;
  mbtn.style.opacity = 1;
  xbtn.style.opacity = 0;

})


// email setup

const cotform = document.querySelector(".page4 .cot2 .cotect-form");

function sendMsg(e){
  e.preventDefault();


const yname = document.querySelector(".page4 .cot2 #yourname");
const email = document.querySelector(".page4 .cot2 #email");
const msg = document.querySelector(".page4 .cot2 .message");



Email.send({
  SecureToken : "5ec96ced-27f6-4f1a-a3f0-a83586b7e96b",
  To : 'shubhcode97@gmail.com',
  From : email.value,
  Subject : "Contact Form",
  Body : msg.value
}).then(
message => alert(message)
);

}


cotform.addEventListener("submit",sendMsg);




 




