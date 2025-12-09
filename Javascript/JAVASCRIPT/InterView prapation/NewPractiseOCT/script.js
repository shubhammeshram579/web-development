console.log("hello javascript")




// most inportance topic we reviseion 
// varible 
var v1 = "shubham"
let v2 = "meshram"
const v3 = "gondia"
// dtype
//primative str,numb,float, int,boolian,symbole
// non premative (), {}, []
// constional statment

if(true){
    console.log("it is true")
}

if(v1 === "shubham"){
    console.log("match")
}else{
    console.log("not match")
}

let num = 11;

if(num % 2 === 0){
    console.log("even number")
}else{
    console.log("odd")
}

let time = 12;

if(time >= 5 && time <= 12){
    console.log("good morning")
}else if(time >= 12 && time <= 16){
    console.log("good afternoon")
}else{
    console.log("good night")
}

// mutiple condtion
let array = [1,2,3,4,5,6,7,8];

// array.forEach((i) => {
//     if(i % 2 === 0){
//         console.log(i , "even")
//     }else{
//         console.log(i, "odd")
//     }
// })


//functions 

// defind function for sum of 2 dight number
function SumOfNumber(a,b){
    let sum = a + b
    console.log(sum)
}

// SumOfNumber(10,20);

// first class functuion 
const firstCals = function(){
    console.log("hello first class function")
}

// firstCals()

// loops
let str = "shubham";
for(let i = 0; i <= str.length -1; i++){
    // console.log(i, "index") // index values 
    // console.log(str[i])
    // console.log(str)
    // console.log(str[i])
}

// for(let i in str){
//     console.log(str[i])
// }

// for(let i of str){
//     console.log(i)
// }

// let n = 0;

// while(n < 10){
//     console.log("shuham");
//     n += 1
// }

// array

let arr = []

for(let i = 1; i <= 20; i++ ){
    if(i % 2 === 0){
        arr.push(i)
    }
}

console.log(arr);

let nstr = []
arr.forEach((i) => {
    nstr.push(i + 1)
    
})

console.log(nstr)

let marge = arr.concat(arr,nstr)
console.log(marge)

let sortarr = marge.sort((a,b) => (a - b))
console.log(sortarr);

let matchfind = sortarr.find((i) => (i === 18))
console.log(matchfind)

let findlessthenten = sortarr.filter((i) => (i < 15))
console.log(findlessthenten)


let duplect = [...new Set(findlessthenten)]
console.log(duplect)

let countN = 0
findlessthenten.forEach((i) => {
    countN = i    
})

console.log(countN)


let total = duplect.reduce((v, total) => (v + total) )
console.log(total)


let maping = duplect.map((i) => {
    if(i === 12){
        return i = 50
    }
    return i
})

console.log(maping)



let str3  = "shubham";

for(let i = 0; i < str3.length -1; i++){
    console.log(str3[i])
}






// object

// string
// callback funtion
// promises and asyncs await
// spret and rest
// defualt parameter
// destraring
// temratering literal
// try and cach

