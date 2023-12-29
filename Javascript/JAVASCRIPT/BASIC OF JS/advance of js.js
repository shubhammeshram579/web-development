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
// it is a calculation statpe by stape it call heap memmory
// 1+ 2 = 3 
// 3 + 3 = 6
// 6 + 4 = 10 
// 10 + 5 = 15

