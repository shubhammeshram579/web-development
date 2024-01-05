var main = document.querySelector(".main");
var crcl = document.querySelector(".cercil");
var crcl2 = document.querySelector(".cercil2");

document.addEventListener("mousemove",function(dets){
    crcl.style.left = dets.x +"px"
    crcl.style.top = dets.y +"px"
    crcl2.style.left = dets.x+ 10 +"px"
    crcl2.style.top = dets.y+ 10 +"px"
    
})

