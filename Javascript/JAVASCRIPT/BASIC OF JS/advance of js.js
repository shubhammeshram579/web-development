// 1. diffrence between let const and var

// first diff
// i) var is old version ES5 in js
// i) const let new version ES6 in js. it is applicable 2015.

// second diff
// ii) var is function scoped base in js
// ii) const let is breces scoped in js

// 1. exp: let vs var
// var varible ouput showing range of 0 to 11 and 12 becouse function base scoped
function abcd(){
    for (var i = 1; i < 12; i++){
        console.log(i);
    }
    console.log(i);
}

console.log(abcd());


// 2. exp: let vs var
// let varible is got a error becouse it is braces base scope.
function abc(){
    for (let i = 1; i < 12; i++){
        console.log(i);
    }
    // console.log(i);
}

console.log(abc());

// Third diff
// iii) var adds itself to the window object
// iii) const let doesn't add to the window object

var a = 25; // it is add on window object
let b = 25; // it is doen't add on window object


// 2. stack in js
// Execution Stack (Call Stack):
// (JavaScript is a single-threaded, synchronous language, meaning it processes one operation at a time in a single sequence. The call stack is a data structure that keeps track of the execution of functions. When a function is called, it gets added to the top of the stack, and when the function completes, it gets removed from the stack. This is known as Last In, First Out (LIFO) behavior.)

// for example:

function foo() {
    console.log('foo');
  }
  
  function bar() {
    console.log('bar');
    foo();
  }
  
  bar();

//   In this example, when bar() is called, it is added to the call stack. Inside bar(), foo() is called, so it gets added to the top of the stack. When foo() completes, it is removed from the stack, followed by bar().
  
// 2. Data Structure Stack:
// JavaScript also allows you to implement a stack as a data structure. This is not built into the language like the call stack but can be implemented using arrays or linked lists. In this context, a stack is a collection of elements with two main operations: push (adding an element to the top) and pop (removing the top element).

// for example:
let stack = [];

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack); // [1, 2, 3]

// Pop the top element
let poppedElement = stack.pop();

console.log(poppedElement); // 3
console.log(stack); // [1, 2]




// 3. heap memmory
// The heap is a more dynamic area of memory used for storing objects and data structures.

// for example human calculation 
//1+2+3+4+5 = 15

// computer colculation
// it is a calculation stape by stape and store the data  each of addition it call heap memmory
// 1+ 2 = 3 
// 3 + 3 = 6
// 6 + 4 = 10 
// 10 + 5 = 15

// 4. executiion context 

// it is building a new fuction then the funtion the under imaginery creating a conteners
// Execuction context is a conteners where the fuction code is execut and it's created whenever a fuction is called it contains fuction and lexical enviroment

// i) varibles
// ii) function inside that prants function
// iii) lexical environment thet fuction

// this is tree imagenery conteners it's call execution context

// for example

function execution_context(){
    var a = 15;
    function def(){
        var b = 25;
    }
}

// access
execution_context(a); //it is a varible selection used 
execution_context(b); // it is not varible selection acces becouse it need selector def fucction then i access varible b



// 5. how to copy reference value
// Copy to array value like arr to arr2 but is face issue like i deleted arr2 values the my arr value is also deleted
// this is solution for this problem


// 5. copy refrence array value
let arr = [1,2,3,4,5];
let arr2 = arr;

console.log(arr);
console.log(arr2);

// deleted value arr2 
arr2.pop()

console.log(arr);
console.log(arr2);


// solution 

let arr3 = [...arr]; //used sprect propeties then copy real values

console.log(arr3);

arr3.pop();

console.log(arr);
console.log(arr3);


// 6. Truethy and falsy

// venover time i wright a paramater  it's mainly blog two truely and falsy parameted
// falsy values are: null, NaN,undefind , 0 , false, document.all 
// Truety value are: 1 ,-1 ,true,str,Boolean

// for falsy:
if (0){
    console.log("hey");
}
else{
    console.log("hello");
}

// for truethy
if (3){
    console.log("hey");
}
else{
    console.log("hello");
}


// 7. forEach loops and forign loops

// forEach loop it is used only arrays
// foreach loop is tempraly base output store it not a origenal array value updated
// for example
var arrr = [1,2,3,4,5,6,7];

arrr.forEach(function(val){
    console.log(val + 5);
})

for (var k of arrr){
    console.log(k)
}

// forign loops
// it is used only for object varible 
// for example

var laptop = {
    brand: "dell",
    storage: 512,
    ram: 8,
    processer: "4 cores"
}

// laptop.forEach(function(b){
//     console.log(b +5);
// })

for (var i in laptop){
    console.log(i)
}

for (var i in laptop){
    console.log(i,laptop[i])
}

for (var i in laptop){
    console.log(laptop)
};


// do while
// var dvail = 12;

// do {
//     console.log("hey");
//     dvail ++;
// }
// while (dvail > 20)


// 8. callback function
// set the timer to execute code for after 5s it callback function
// for exemaple using settimeout ,setInterval, fatch and more this is async fuction

setTimeout(function(){
    console.log("hello")
},5000)

// setInterval(function(){
//     console.log("hey")
// },2000)


// 9. first class fucction
// as a fuction uesd as a value it's call first class fuction

var abd = function(){
    console.log("what is first class fuction ?")
}

console.log(abd);



// 10. how array mode behind the sence

var ra = [12,33,4,55,66];

// got to the broweger tab then got o the console Array.isArray({}) , Array.isArray([])



// 11. how to delete object value
var ob10 = {
    name: "shubham",
    age: 26
}

console.log(ob10.name);

delete ob10.name;











