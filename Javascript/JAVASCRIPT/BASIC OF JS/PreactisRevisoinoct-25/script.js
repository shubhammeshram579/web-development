let head = document.querySelector(".heaing")
let backcoler = document.querySelector("body")

let num = 0
head.addEventListener("click",() => {
    if(num === 0){
        backcoler.style.backgroundColor = "red"
        num = 1
    }else{
        backcoler.style.backgroundColor = "green"
        num = 0
    }
})



// what is javascript
// javascript is programming laguvage it create dymaic nd intertive pages
// what is varible

// varible is name of container to store value

// in javasccript 3 type varible difind 
// var let const

var firstname = "shubham"
var numes = 1234566
var float = 22.33
var bigit = 1234566n
var isMatch = true
// var simbol = simbol()
var isNull = null
var isUndefind = undefined
