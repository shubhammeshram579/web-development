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

// natest if
for(let i = 0; i< 20; i++){
    if(i % 2 === 0){
        if(i > 10){
            console.log(i)
        }
    }
};



// 3. Question: How can you check if a number is positive, negative, or zero ? Answer :

let v1 = 0;

if(v1 > 0){
    console.log("positive value")
}else if(v1 < 0){
    console.log("nagative value")
}else{
    console.log("zero value")
};


// 4.Question: How can you check if a value is null or undefined ? Answer :

let nullV = null;
let  undefinedV = undefined;

if(nullV === null && undefinedV === undefined){
    console.log("both values are empty")
};

// for not null and undefined
let nullV2 = 100;
let  undefinedV2 = 200;

if(nullV2 !== null && undefinedV2 !== undefined){
    console.log("both values are not empty")
};



// 5.Question: How can you check if a number is even or odd using a conditional statement?Answer:

let numV = 11;

if(numV % 2 === 0){
    console.log("it is event number")
}else{
    console.log("it is odd number")
};

// 7.Question: How do you use a switch statement to check the value of a variable ? Answer :

let item = "laptop";

switch(item){
    case "apple":
        console.log("it is fruits item");
        break
    case "laptop":
        console.log("it is machinery item");
        break
    default:
        console.log("other items");
};

// 8. Question: How can you check if a number is within a certain range(e.g., 10 to 20) ? Answer :

// example1
let rangeOf = 10;
if(rangeOf >= 10 && rangeOf <= 20){
    console.log("range of number 10 to 20")
};

// example 2
for(let i = 0; i <= 20; i++){
    if(i > 10 && i <= 20){
        console.log(`number of range: ${i}`)
    }
};


// 9.Question: How can you conditionally check if a string is non - empty ? Answer :

let str = "";

if(str.length > 0){
    console.log("string is not empty")
}else{
    console.log("string is empty")
};

// 10. Question: How can you use a switch statement with a default case that handles multiple values ? Answer :

let items = "laptop";

switch(items){
    case "apple":
    case "banana":
        console.log("it is fruits")
        break
    case "laptop":
    case "mobile":
        console.log("it is machine")
        break
    default:
        console.log("other items")
};

// 11. Question: How can you use a conditional(ternary) operator to assign a default value if a variable is undefined ? Answer :

// user is not insilation
let users;
let res = user === undefined ? users : "user is not defind"
console.log(res);


// user is insilation
let users2 = "shubham";
let res2 = user !== undefined ? users2 : "user is not defind";
console.log(res2);











