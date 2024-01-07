var main = document.querySelector(".main");
var crcl = document.querySelector(".cercil");
var crcl2 = document.querySelector(".cercil2");

document.addEventListener("mousemove",function(dets){
    crcl.style.left = dets.x +"px"
    crcl.style.top = dets.y +"px"
    crcl2.style.left = dets.x -200 +"px"
    crcl2.style.top = dets.y -200+"px"
    
})


var h4tag = document.querySelector("h3");

main.addEventListener("mouseenter",function(){
    h4tag.style.color = "red"

})

main.addEventListener("mouseleave",function(){
    h4tag.style.color = "green"
    setTimeout(function(){
        h4tag.style.color = "#fff"

    },2000)

})







  







