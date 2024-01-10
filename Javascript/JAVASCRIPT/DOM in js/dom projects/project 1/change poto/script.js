var sts =document.querySelector(".contaner h3");
var resultbtn = document.querySelector(".contaner .result");
var resetbtn = document.querySelector(".contaner .reset");


resultbtn.addEventListener("click",function(){
    sts.innerHTML = "Pass"
    sts.style.color = "green"
})

resetbtn.addEventListener("click",function(){
    sts.innerHTML = "Fail"
    sts.style.color = "red"
})

