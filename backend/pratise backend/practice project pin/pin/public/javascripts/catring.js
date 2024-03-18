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
    
})