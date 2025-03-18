console.log("conditional statement");



// basic constional statement

if(true){
    console.log("i am shubham")
};


if(false){
    console.log("i am shubham")
}else{
    console.log("i am not shubham")
};


// multiple conditional statement

let a = "i am mouse"
let b = "i am laptop"
let e = "i am not both"


if(a === "i am mouse"){
    console.log(a)
}else if(b === "i am laptop"){
    console.log(b)
}else{
    console.log(e)
}


// logical oprater 

// and oprater
let time  = 24;

if(time > 5 && time < 12 ){
    console.log("good moning")
}else if(time > 12 && time < 16){
    console.log("good afternoon")
}else if(time > 16 && time < 22){
    console.log("good evening")
}else{
    console.log("good night");
};


// or || oprater

let num = 20;

if(num === 10 || num === 20 ){
    console.log("found")
}else{
    console.log("not found")
}


// !== not oprater

let user = "shubham";

// true
if(user){
    console.log("user is login")
}else{
    console.log("user not login")
}


// false
if(!user){
    console.log("user is login")
}else{
    console.log("user not login")
}


