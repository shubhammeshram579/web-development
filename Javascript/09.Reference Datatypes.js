// User defined datatypes

// 1 objacts
let animal = {
    name: "zebra",
    legs: 4
};

// Dot Natation
console.log(animal);
console.log(animal.name);
console.log(animal.legs);

// bracket notation
console.log(animal["name"]);
console.log(animal["legs"]);

//3 way
let LegsProp = "name"
console.log(animal[LegsProp]);






// 2 Array

let arr = ["shubham","meshram","gondia","MH","India"]

console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr.slice(1,3));
console.log(arr.length);




// 3 function
function myfuntion(a,b){
    return a+b;
};

console.log(myfuntion(120,55));


function name_marge(name1,name2){
    console.log("my name is "+ name1+name2);
};

console.log(name_marge("shubham ","meshram"));