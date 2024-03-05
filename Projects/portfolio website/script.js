

// about me page skills education and experience btn effect creation
function aboutmepage(){

  const skillsbtn = document.querySelector("#About .card3 #skills");
  const expbtn = document.querySelector("#About .card3 #Experience");
  const edubtn = document.querySelector("#About .card3 #Education");
  
  const skillssection = document.querySelector("#About .card4");
  const ExpSection = document.querySelector("#About .card5");
  const EduSection = document.querySelector("#About .card6");
  
  
  
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
  
  }
  
  aboutmepage();
  
  
  
  //  navbar heading click then scroll page effect creation 
  
  function navmenuclickscrollpage(){
  
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
  
  };
  
  navmenuclickscrollpage();
  
  
  // responsive menu btn click then open menu bar effect creation
  function menubtn(){
    const mbtn =document.querySelector(".menu .fa-bars");
   const xbtn =document.querySelector(".menu .fa-xmark");
  
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
  };
  
  menubtn();
  
  
  //   mouse cursul move effect creation 
  function mousecursulmove(){
    
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
  };
  
  mousecursulmove();
  
  
  // animation effect using gsap
  // home page animation 
  
  function animationeffectcreation(){
  var tl = gsap.timeline();
  tl.from("nav .logo, nav .navbarname a",{
      y:-100,
      duration:0.5,
      opacity:0,
      stagger:0.3
  
  });
  
  gsap.from("#home .card img",{
      x:-100,
      duration:3,
      opacity:0,
      scale:0.1
      // stagger:1
  
  });
  
  tl.from("#home .card2 .hello",{
      x:-100,
      duration:0.5,
      opacity:0,
      // stagger:2
  
  });
  
  
  tl.from("#home .card2 .name",{
      x:100,
      duration:0.5,
      opacity:0,
      // stagger:3
  
  });
  
  tl.from("#home .card2 .job",{
      x:-100,
      duration:0.5,
      opacity:0,
      // stagger:3
  
  });
  tl.from("#home .card2 .titletag",{
      x:-100,
      duration:0.5,
      opacity:0,
      // stagger:3
  
  });
  
  tl.from("#home .card2 a",{
      x:100,
      duration:0.5,
      opacity:0,
      // stagger:3
  
  });
  
  
  
  // anout page animation
  tl.to("#About,#About img, #About .card2",{
      transition: "all ease 1s",
      opacity: 1,
      trigger:1,
      scrollTrigger: {
          trigger: "#About",
          scroller: "body",
          start: "top 5%",
          end: "top 15%",
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
  
  
  // navbar animation 
  gsap.to(".nav", {
      height: "70px",
      backgroundColor: "#111",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
  
  };
  
  
  animationeffectcreation();
  
  
   
  
  
  // email setup using api smtpjs
  
  const cotform = document.querySelector(".page4 .cot2 .cotect-form");
  
  function sendMsg(e){
    e.preventDefault();
  
  
  const yname = document.querySelector(".page4 .cot2 #yourname");
  const email = document.querySelector(".page4 .cot2 #email");
  const msg = document.querySelector(".page4 .cot2 .message");
  
  
  
  Email.send({
    SecureToken : "596dc900-e69d-4d31-9724-dd5a5714cbb2",
    To : "shubhcode97@gmail.com",
    From : email.value,
    Subject : "Contact Form",
    Body : msg.value
  }).then(
  message => alert(message)
  );
  
  };
  
  
  cotform.addEventListener("submit",sendMsg);
  
  
  
  
   
  
  
  
  
  