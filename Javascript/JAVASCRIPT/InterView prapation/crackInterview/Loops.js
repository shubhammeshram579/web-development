console.log("loops basic")


// what is loops?

// loops print of reaped value it call loops

// how many type of loops
// for , while,do while , forEach , off, in

// print 1 to 10 range of number using for loop
for(let i=0; i <= 10; i++){
    console.log(i)
}

// 1 to 5 range sum total
let sum = 0

for(let i=1; i <= 5; i++){
    sum += i
};

console.log("total",sum);


let array = []

for(let i= 2; i <= 20; i++){
    if(i % 2 === 0){
        array.push(i)
    }
};

console.log("total",array);

let array2 = ["shubham","meshram","gondia"];

for(let i= 0; i < array2.length; i++){
    console.log(array2[i])
};

// forEach loops
array2.forEach((i) => {
    console.log(i)
});

let string = "shubham";
for(let i= 0; i < string.length; i++){
    console.log(string[i])
};

// for in loop
for(let i in string){
    console.log(string[i])
}

// of loop
for(let i of string){
    console.log(i)
};


// revese string
let reverse = ""

for(let i = string.length - 1; i > 0; i--){
    reverse += string[i]
}

console.log("reverse",reverse);



