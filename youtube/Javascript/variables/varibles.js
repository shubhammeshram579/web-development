

// topic we learn today

// what is variable in js?
// what is es5 and es6 ?
// difference between var , let , const
// what is function scope and block scope
// difference between let and const



// what is variable in js?
// In JavaScript, a variable is a named container used to store and manage data values.

// var a = 10; // es5 it updatble and it is function scop
// let b = 10; // es6 , it is updable , it is block scope
// const c = 10; // es6 , it is not updateble it contract , it is block scope

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




//************************************************************ */
//Operators
//operator is a special symbol or keyword used to perform operations on values and variables
// (Arithmetic, Comparison,Assignment Operators, Logical)


// Arithmetic (- + * / % ** ++ --)
let a = 10;
let b = 20;

let total = b * a;

console.log(total)

let isoddoreven = 10;

if(isoddoreven % 2 === 0){
    console.log("even")
}else{
    console.log("odd")
}


let count = 1;   // 1 + 1

// count++;
count--;

console.log(count)





// Comparison (< > >= <= ,== , ===, != , )

let g = 10;
let h = 10;

// 20 21 23
if(g >= h){
    console.log(" g less then h")
}else{
    console.log("h greter then g")
}

if(g != h){
    console.log("match")
}else{
    console.log("not match")
}


// Assignment Operators (= , +=, -=, *= /= %= **=)
let isnumber = 0;

for(let i = 1; i <= 5; i++){
    // console.log(i)
    isnumber -= i
}


console.log(isnumber);




// Logical and , or , not (&&, || , !)

let t = 10;
let y = 20;

if(t == 10 && y == 2){
    console.log("both values are match")
}else{
    console.log("both value are not match")
}


if(t == 10 || y == 2){
    console.log("both values are match")
}else{
    console.log("both value are not match")
}



if(y != 10 && y == 20){
    console.log("match")
}else{
    console.log("not match")
}
















