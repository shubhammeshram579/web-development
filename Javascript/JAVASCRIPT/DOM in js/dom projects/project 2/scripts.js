
// love hard icome feature add on img
var imges = document.querySelector(".contener2");
var love = document.querySelector(".contener2 i")

imges.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.color = "red"
    love.style.opacity = "0.7"

    setTimeout(function(){
        love.style.opacity = "0"
    },1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)


})

// hard buttun click then hard icon show on imge
var hard = document.querySelector(".ri-heart-3-fill");

hard.addEventListener("click",function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.color = "red"
    love.style.opacity = "0.7"

    setTimeout(function(){
        love.style.opacity = "0"
    },1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)


})

// click likes then incresing likes
var like = document.querySelector("h4");

var likecount = 0;
like.addEventListener("click",function(){
    if(likecount == 0){
        like.innerHTML = "1,231 likes"
        likecount = 1
    }else if(likecount == 1){
        like.innerHTML = "1,232 likes"
        likecount = 2
    }else{
        setTimeout(function(){
            like.innerHTML = "1,230 likes"
            likecount = 0
        },2000)
        
    }
    
})