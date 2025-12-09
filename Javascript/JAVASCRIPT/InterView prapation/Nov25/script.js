// what is javascript ?

// what is varible ?

// how many type of varible in javascript?

// var a = 10;
// let b = 20;
// const c = 20;

// what is data type in js?

// two type dtype in js primative and non-premative dtype

// 1. primative

// let num = 12345;
// let str = "shubham";
// let int = 12;
// let flote = 12.44;
// let boolean = true;  // false
// let symoble = Symbol("shubham");
// let isnull = null;
// let isundifind = undefined;


// 2. non primative (), {}, []

let obj = {
    name:"shubham",
    age:27
}

let array = [1,3,5,6];

function ab(a,b){
    return a + b
}

let res = ab(10, 20);
// console.log(res);


// arrow function in js
let printarray = (s,e) => {
    for(let i = s; i <= e; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

}

// printarray(2,20);


function contrc(n,a) {
    this.name = n,
    this.age = a

}

let res2 = new contrc("shubham",27);
let res3 = new contrc("labham",20);
// console.log(res2);
// console.log(res3);


// (
//     console.log("i am iffe function")
// )();


// now we can start interive quetions

//3. Print the sum of numbers from 1 to 100.
let n = 5;
let sum = 0;
for(let i = 1; i <= n; i++){
    // console.log(i)
    sum += i
}

// console.log(sum);


// 6.Print the factorial of a number(e.g., 5!).

let fact = 1;

for(let i = n; i >= 1; i--){
    // console.log(i)
    fact *= i
};

// console.log(fact);

// 7.Check if a number is prime.

let primn = 13;
let isprime = true;

if(primn <= 1){
    isprime = false
}else{
    for(let i = 2; i <= Math.sqrt(primn); i++){
        console.log(i)
        if(primn % i === 0){
        isprime = false;
        break
        }
}
}

// console.log(isprime ? "prime" : "not prime")


  // 8.Print Fibonacci series up to 10 terms.
//   let n1 = 0 , n2 = 1, fabonacci;

//   for(let i = 0; i < 10; i++){
//     console.log(n1)
//     fabonacci = n1 + n2
//     n1 = n2
//     n2 = fabonacci
//   }



  // 9.Sum all the elements in an array.

let ar = [2,5,6,7];
let aSum = 0;

console.log("*********\n******")

for(let i = 0; i <= ar.length -1; i++){
    // console.log(ar[i])
    aSum += ar[i]
}


// console.log(aSum);


// using function
let resSum = ar.reduce((a,b) => (a + b))
// console.log(resSum);


 // 10.Find the maximum number in an array.


let ar2 = [20,50,30,25,10];
let max = ar2[0];

for(let i = 0; i < ar2.length; i++){
    if(ar2[i] > max){
        max = ar2[i]
    }
}

console.log(max);