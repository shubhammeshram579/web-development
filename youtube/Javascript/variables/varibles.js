

// topic we learn today

// what is variable in js?
// what is es5 and es6 ?
// difference between var , let , const
// what is function scope and block scope
// difference between let and const



// what is variable in js?
// In JavaScript, a variable is a named container used to store and manage data values.

var a = 10; // es5 it updatble and it is function scop
let b = 10; // es6 , it is updable , it is block scope
const c = 10; // es6 , it is not updateble it contract , it is block scope

// console.log(a,b,c)




// what is es5 and es6 ?
// Released in 2009, ES5 was a major revision that stabilized the language for modern web browsers
// Released in 2015, ES6 is considered the most significant update to JavaScript, introducing modern syntax that makes code cleaner and more readable


// difference between var , let 

var user = "shubham";
var user = "labham";

// console.log(user);

// let user = "rahul"

// console.log(user);






// what is function scope and block scope


function abc() {

    for(var i = 1; i <= 10; i++){
        // console.log(i)
    }

    // console.log(i)
}


// abc()



// console.log("block scope")

function abc() {

    for(let i = 1; i <= 10; i++){
        // console.log(i)
    }

    // console.log(i)
}


// abc()






// difference between let and const


let mouse = "dell"


// console.log(mouse)

mouse = "lenovo"

// console.log(mouse)


// Assignment to constant variable.

const laptop = "hp"

// console.log(laptop);

// laptop = "acer"

// console.log(laptop);








//**************************************************************************** */


// today topic 

// data types in javascript


// primitive datatypes

var num = 1234;
var float = 122.44;
var str = "shubham";
var istrue = true;
var isNullvalue = null;
var undifindvalue = undefined;
var symoble = Symbol("id")
var bgint = 12345678934567788n;


// console.log(num)
// console.log(str)
// console.log(istrue)
// console.log(isNullvalue)


// non-primitive or refrence datatypes {} , () , [];

// object decalation
var object = {
    name:"subham",
    age:22
}

// console.log(object)


// array values 
var array = [1,2,3,4,5,6]
// console.log(array)


// function 
function ab(a,b){
    return a + b;
}


// console.log(ab(10,20))





// stack memory;

// var x = 10

// console.log(`x: ${x}`)
// var y = x; 

// console.log(`y: ${y}`)

// y = 20;


// console.log("******")
// console.log(`x ${x}`)
// console.log(`update y ${y}`)


// heap memory

// let obj = {
//     product:"mouse",
//     price:200
// }

// console.log(obj);


// let obj2 = obj;


// console.log(obj2)

// obj2.product = "laptop"


// console.log("*********")

// console.log(obj)
// console.log(obj2)





//Operators (Arithmetic, Comparison, Logical, Assignment Operators)


// Arithmetic (- + * / % ** ++ --)

let g = 10;
let w = 20;

let sum = w + g;

console.log(sum)



let isnum  = 10;

if(isnum % 2 === 0){
    console.log("even")

}else{
    console.log("odd")
}

let count = 2;

count--;

console.log(count)



// Comparison (== , ===, != , < > >= <=)


let q = 10; 
let s = 20;

if(q > s){
    console.log("s is greater q")
}else{
    console.log("q is less s ")
}


if(q == s){
    console.log("match")
}else{
    console.log("not match")
}



let j = "10";
let k = 10;


if(j === k){
    console.log("match with value")
}else{
    console.log("not match with key value")
}



// !=


let o = 10;
let f = 20;

if(o != f){
    console.log("not match")
}else{
    console.log("match")
}





// Logical and , or , not (&&, || , !)


let user2 = "shubha"

let user3 = "labham"


if(user2 == "shubham" || user3 == "labham"){
    console.log("both user is match")
}else{
    console.log("both not match")
}




// Assignment Operators (= , +=, -=, *= /= %= **=)


let r = 10;


let total = 0;


for(let i = 1; i <= 5; i++){
    total += i
}

console.log(total)















