
let storyimg = document.querySelectorAll(".page2 .card1 .storyimg");
let storytext = document.querySelectorAll(".page2 .card1 .storycardtext");


storyimg.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.style.scale = 1.05;
        val.childNodes[1].style.opacity = 1 ;
        val.childNodes[1].style.transition = "all ease 1s";
    });
    val.addEventListener("mouseleave",function(){
        val.style.scale = 1;
        val.childNodes[1].style.opacity = 0;
        val.style.transition = "all ease 1s";
    });
});







