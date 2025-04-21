console.log("hello i am shubham")

// what is varible 
let a = 10;
let b = 20;

// console.log(`${a} and ${b}`)

// how manty type of varible in js

var first = "old version es5";
let second = "new version es6";
const third = "new vision es6 and fixed varible"

// console.log(`${first} and ${second} and ${third}`);


// what is dtypes in js
// primative dtype
let num = 12345;
let str = "shbham"
let float = 334.55;
let boolean = true;
let bigit = 123455n
let symbole = Symbol("shubham");


// non-primetive dtypes
// {},[],()

// let array = [
//     {
//         name:"shubham",
//         age:27
//     }
// ];

// function printValue() {
//     console.log(array)
// }

// printValue();


// what is opraters
// oprater means like number + - * / ** // %

// 1. artmetive oprater
// + - * / ** // %

// console.log(`${a} and ${b} total ${a * b}`);

// 2. asign oprater
// += -+ /= *= 
// console.log(`${a} and ${b} total ${a *=  b}`);


// 3. comprizen oprater
// < , > >= <= == === 
// console.log(`${a} and ${b} total ${a >=  b}`);

// 4. logical oprater 
// and or not  && || !=
// console.log(`${a} and ${b} total ${a !== b}`);


// json oprater parse and stringify
// console.log(JSON.stringify(array))



// what is hoisting in js
// before declation varible you can execute top of execute varible it call hoisting 
// example 

// console.log(c)
// var c;
// c = "shubham"

// console.log(c);


// what is condition statement?

// example 
// let time = 11
// if(time === 10){
//     console.log("time is match")
// }else{
//     console.log("not match")
// }

// console.log(time === 11 ? "match":"not match");


// let time2 = 20
// if(time === 10 && time2 === 20){
//     console.log("both are match")
// }


// what is loops
// loops is print of repetive value it call loops

// example
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 5; i >= 1; i--){
//     console.log(i)
// }

let ThirdT = []
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        ThirdT.push(i)
    }
};

// console.log(ThirdT)


// first way to some
let sumA = 0;

ThirdT.forEach((i) => {
    sumA += i
});

// console.log(sumA)


// second way to sum of total
let sum2 = ThirdT.reduce((a,total) => (a + total))
// console.log(sum2)


let Str = "shubham Meshram"
let strore = ""

for(let i = Str.length -1; i >= 0 ; i--){
    strore += Str[i]
}

// console.log(strore)


let obj = {
    name:"shubham",
    age:38
}

// for(let i in obj){
//     console.log(obj[i])
// }

// for(let i of ThirdT){
//     console.log(i)
// };



// what is function ?
// function is block og code store 


function ab(a,b){
    return a + b
}

console.log(ab(10,20))

let ab2 = function() {
    console.log("first class fuction")
}

ab2();


let ab3 = function(a) {
    return function(b){
        return a + b
    }
}

let res = ab3(10)(30)
console.log(res);


function Cont(){
    this.name = "shubham",
    this.age = 34

}

let res2 = new Cont()
console.log(res2);


(
    function(){
        console.log("iffie")
    }
    
)();


const arraw = (a , b) => {
    return a + b
}

console.log(arraw(20,60))


// call back function 

// setTimeout(() => {

//     console.log("hello call back function")

// },2000)


// let count = 1;

// setInterval(() => {

//     if(count === 5){
//         return;
//     }
//     console.log(count += 1)
// },2000)















