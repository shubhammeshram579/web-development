// basic of js print hello words
console.log("hello worlds");
console.log("shubham meshram");


//1. words and keywords in js

// my name is = "shubham"
// for if in while fuction it is a keywords


// 2. varibles in js
// const, let var tree type of varible in js

var a = "shubham";
const b = "labham";
let c = 7038956822;

// update in new varibles
var aa = a;
console.log(aa)

const bb = b;
console.log(bb);

// updating new values 
// (i) var varible
a = "meshram";
console.log(a)



// (ii) let valribles 
c = 9903895682;
console.log(c)

// (iii) const varible
// b = "sharma";
// basic of js.js:38  Uncaught TypeError: Assignment to constant variable.
//     at basic of js.js:38:3
//  const varible not updated it is fixed do not change values.

// 3 primative data types in js

var str = "shubham";
var num = 1234567890;
var nums = 123456n;
var float = 15.50;
var int = 1200;
var buloon = true;

// 4 reprence data types [] () {}

var list = ["shubham","meshram","gondia"];
var object_list = {"name":[12,22,4,55]};
var tupples_list = (1,2,34);

// (i) reprence data types 
//  referance value means if you copy  a varible to b varible it not copy it refrence of copy value it call refence value
// for example

var list2 = [1,3,4,5,6];
var list3 = list2;

console.log(list3);
console.log(list2);

// (ii) delete list2 and list3 last values 
// i can delete list3 to last values it is automatacaly deleted list2 value also
list3.pop()

console.log(list3);
console.log(list2);

// 5 cantional if else else if

if (100 > 120){
    console.log("true")
}
else if (1200 < 1000){
    console.log("false")
}
else if (1200 == 1200){
    console.log("equel")
}
else{
    console.log("not match")
}

// 6 fuction in js

function name(a){
    console.log(a);
};

name("hello words");

function abs(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

abs(12,23,45);

// for loops

var lops1 = [1,2,3,4,5,6,7,8,9];

for (var i in lops1){
    console.log(i);
};

for (var key of lops1){
    console.log(key)
}

for (var i=0; i<10; i++){
    console.log(i)
}

for (var i=25; i<51; i++){
    console.log(i)
}


// while loops

var w = 0;

while (w < 10) {
    w++;
}

var a = 12;

while (a > 20) {
    a++;
}



// array in js


var arr = [1,2,3,4,5,6,7,8];

console.log(arr);
console.log(arr[2]);

arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift(10);
console.log(arr)

arr.unshift(0);
console.log(arr);

arr.splice(2,2);
console.log(arr);


// object in js

var abovdetails = {
    name: "shubham",
    age: 25,
    address: "gondia"
}

console.log(abovdetails);

console.log(abovdetails.name);
console.log(abovdetails.age);










