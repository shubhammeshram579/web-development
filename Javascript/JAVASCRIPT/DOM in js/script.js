// what is DOM (Document object model )

// 1. 4 filler of DOM

// i) selection of element like (h1,#id,.class,[])
var a = document.querySelector("h2");
console.log(a);

// ii) changing html 
var b = document.querySelector("h2");

b.innerHTML = "what is your name ?";



// iii) selecting and changing css
var c = document.querySelector("h2");

c.style.color = "red";
c.style.textDecoration = "underline";
c.style.padding = "20px";
c.style.backgroundColor = "green";


// iv) event listner
var el = document.querySelector("h3");


// el.addEventListener("click",function(){
//     el.innerHTML = "shubham"
//     el.style.backgroundColor = "red"
// })
var c = 0;

el.addEventListener("click",function(){
    if (c == 0){
    el.innerHTML = "python is programing languges"
    el.style.color = "blue"
    el.style.fontSize = "25px"
    el.style.backgroundColor = "#fff"
    c = 1
}else{
    el.innerHTML = "python is programing languges"
    el.style.color = "red"
    el.style.fontSize = "10px"
    el.style.backgroundColor = "#fff"
    c = 0
}
});


// 2. simple assiment task create butten for bulp on and off



var bulp = document.querySelector("h4");
var btn = document.querySelector("button");

var bup = 0;

btn.addEventListener("click" , function(){
    if (bup == 0){
        bulp.style.backgroundColor = "#111"
        btn.innerHTML = "Off"
        bup = 1

    }else{
        bulp.style.backgroundColor = "yellow"
        btn.innerHTML = "On"
        bup = 0;
    }
    

});


// 3.  multiple element seleted

var mulp = document.querySelectorAll("h5");

console.log(mulp);

// mulp.forEach(function(v){
//     console.log(v + 4)
// })



// 4. other element selection 

var id = document.getElementById("id");

id.style.color = "red"

console.log(document.getElementsByClassName("shubham").length);


// document.textContent("h5")


















