let orderpage = document.querySelector(".hidden");
let btn = document.querySelector(".navbar #group");

let a = 0
btn.addEventListener("click",function(){
    if (a === 0){
        orderpage.style.opacity = 1;
        a = 1 

    }else{
        orderpage.style.opacity = 0;
        a = 0
    }
    
});


let sebtn1 = document.querySelector(".navbar .part2 .fa-magnifying-glass");
let sebtn2 = document.querySelector("#searbtn2");
let searbar = document.querySelector(".searbar");
let navbarbtn = document.querySelector(".navbar");




sebtn1.addEventListener("click",function(){
    searbar.style.display = "block";
    navbarbtn.style.display = "none";
    searbar.style.display = "flex";
    searbar.style.alignItems= "center";
    searbar.style.justifyContent = "center";

})


sebtn2.addEventListener("click",function(){
    searbar.style.display = "none"
    navbarbtn.style.display = "block"
    navbarbtn.style.display = "flex";
    navbarbtn.style.alignItems= "center";
    navbarbtn.style.justifyContent = "space-around";

})


