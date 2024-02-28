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
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
   
};


