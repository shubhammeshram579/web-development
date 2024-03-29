let cards =  document.querySelectorAll(".page4 .card");
let imgs =  document.querySelectorAll(".page4 .card img");

cards.forEach(function(val){
 val.addEventListener("mouseenter",function(){
     val.childNodes[7].style.opacity = 1;
     val.style.color = "#1111115d";
 })
 val.addEventListener("mouseleave",function(){
     val.childNodes[7].style.opacity = 0;
     val.style.color = "#111";
  
 })

 val.addEventListener("mousemove",function(dent){
     val.childNodes[7].style.left = dent.x + "px";
     val.childNodes[7].style.top = dent.y + "px";
 })

})