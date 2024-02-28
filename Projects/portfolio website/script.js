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



// project page 

let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("nav a");


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
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


// scroll using gsap
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
    duration:5,
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
    duration:1,
    opacity:0,
    // stagger:3

});

// anout page animation

gsap.to(".page2 img,.page2 .card2",{
    stagger:1,
    transition: "all ease 5s",
    opacity: 1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 2%",
        end: "top 10%",
        scrub: true,
        markers:true
      },
    
})


// gsap.to(".page3",{
//     stagger:1,
//     transition: "all ease 5s",
//     opacity: 1,
//     scrollTrigger: {
//         trigger: ".page3",
//         scroller: "body",
//         start: "top 20%",
//         end: "top 50%",
//         scrub: true,
//         markers:true
//       },
    
// })


