let basicloop = "i am loops";

console.log(basicloop);


// 1. Print numbers from 1 to 10 using a loop.

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// };


// 2.Print even numbers between 1 and 20.

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// };


// 3. Print the sum of numbers from 1 to 100.

// let total = 0;

// for(let i = 1; i <= 100; i++){
//     total += i
// };
// console.log(total);



// 4. Reverse a string using a loop.
// let str = "shubham";
// for(let i = str.length -1; i >= 1; i-- ){
//     console.log(str[i])
// };


// 5.Print each character of a string.
// let str2 = "labham";
// for(let i = 0; i < str2.length; i++){
//     console.log(str2[i]);
// }



// 6.Print the factorial of a number(e.g., 5!).
// let fatrialNum = 1;
// for(let i = 5; i >= 1; i--){
//     fatrialNum *= i
// };

// console.log(fatrialNum);


// 7.Check if a number is prime.

/*
let primeNumbar = 11;
let isprime = true;

if(primeNumbar <= 1){
    isprime = false;
}else{
    for(let i = 2; i <= Math.sqrt(primeNumbar); i++){
        if(primeNumbar % i === 0 ){
            isprime = false;
            break
        }
    }
}

console.log(isprime ? "prime": "not prime");
*/


// 8.Print Fibonacci series up to 10 terms.

/*
let f1Num = 0, f1Ind = 1, fibonnacci;

for(let i = 0 ; i < 10; i++){
    console.log(f1Num)
    fibonnacci = f1Num + f1Ind
    f1Ind = f1Num
    f1Num = fibonnacci
};
*/


// 9.Sum all the elements in an array.

/* 
let array = [1,2,3,4,5,6,7];
let totalSum = 0;

array.forEach((i) =>{
    totalSum += i
});

console.log(totalSum);
 */


// 10.Find the maximum number in an array.

let array = [1,2,3,44,53,62,7];
let max = array[0];

// for used fromwork
/* 
console.log(Math.max(...array));

array.forEach((i) => {
    if(i > max){
        max = i
    }
})
console.log(max)
 */


// 11.Print the elements of a 2D array.
/* 
let array1 = [[1,23,4,6],[4,55,33,5]]

array1.forEach((i) => {
    i.forEach((j) => {
        console.log(j)
    })
});
 */