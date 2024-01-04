
// two button  event lisners click feature add page1
var h5r = document.querySelector("h5");
var remove = document.querySelector("#remove");
var addF = document.querySelector("#add-friens");

remove.addEventListener("click",function(){
    h5r.innerHTML = "Stangers"
    h5r.style.color = "red"
})

addF.addEventListener("click",function(){
    h5r.innerHTML = "Friends"
    h5r.style.color = "blue"

})




// one button multiple option click event liners featur page 2
var onebtn = document.querySelector("#remove2");
var sta = document.querySelector("#stanger");

var demo = 0;

onebtn.addEventListener("click",function(){
    if (demo == 0){
    sta.innerHTML = "Friends"
    sta.style.color = "green"
    onebtn.innerHTML = "Add Friends"
    onebtn.style.backgroundColor = "green"
    demo = 1

}else{
    sta.innerHTML = "Stangers"
    sta.style.color = "red"
    onebtn.innerHTML = "Remove"
    onebtn.style.backgroundColor = "rgb(181, 78, 78)"
    demo = 0
}

})

