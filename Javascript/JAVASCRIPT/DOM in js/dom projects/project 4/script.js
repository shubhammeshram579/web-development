// var elem1 = document.querySelector("#elem1");
// var elem1image = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function(dent){
//     elem1image.style.left = dent.x +"px"
//     elem1image.style.top  = dent.y +"px"


// })


// elem1.addEventListener("mouseenter",function(dent){
//     elem1image.style.opacity = 1

// })

// elem1.addEventListener("mouseleave",function(dent){
//     elem1image.style.opacity = 0

// })



// all image move
var elem1 = document.querySelectorAll(".elem");
var elem1image = document.querySelectorAll(".elem img");


elem1.forEach(function(val){
    val.addEventListener("mouseenter",function(dent){
    val.childNodes[3].style.opacity = 1 
    });


    val.addEventListener("mouseleave",function(dent){
        val.childNodes[3].style.opacity = 0
    
    })
    val.addEventListener("mousemove",function(dent){
        val.childNodes[3].style.left = dent.x +"px"
        val.childNodes[3].style.top  = dent.y +"px"
    })


})






