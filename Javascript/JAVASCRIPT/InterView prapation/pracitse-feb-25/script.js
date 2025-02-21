let basicloop = "i am loops";

console.log(basicloop);


// 1. Print numbers from 1 to 10 using a loop.

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// };

// pracise 
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// };


// 2.Print even numbers between 1 and 20.

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// };

// practise
/* 
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
};
 */

// 3. Print the sum of numbers from 1 to 100.

// let total = 0;

// for(let i = 1; i <= 100; i++){
//     total += i
// };
// console.log(total);

// practise
/* 
let totalRange = 0; 
for(let i = 1; i <= 100; i++){
    totalRange += i
};

console.log(totalRange);
 */

// 4. Reverse a string using a loop.
// let str = "shubham";
// for(let i = str.length -1; i >= 1; i-- ){
//     console.log(str[i])
// };

// practise 
// basic of reverce concept
/* 
for(let i = 10; i >= 1 ; i--){
    console.log(i);
}
 */


/* 
let stringName = "my name is shubham";
let reversStr = '';
for(let i = stringName.length -1; i >= 0; i--){
    reversStr  += stringName[i]
};

console.log(reversStr);
 */


// 5.Print each character of a string.
// let str2 = "labham";
// for(let i = 0; i < str2.length; i++){
//     console.log(str2[i]);
// }

// practise
/* 
let strName = "i am softwere developer";
for(let i = 0; i <= strName.length; i++){
    console.log(strName[i]);
};
 */


// 6.Print the factorial of a number(e.g., 5!).
// let fatrialNum = 1;
// for(let i = 5; i >= 1; i--){
//     fatrialNum *= i
// };

// console.log(fatrialNum);

// practise
/* let factrialSum = 1;
for(let i = 5; i >= 1; i--){
    factrialSum *= i
};

console.log(factrialSum);
 */


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


// pracise

/* let primNumRange = 6;
let isPrime = true;

if(primNumRange <= 1){
    isPrime = false;
}else{
    for(let i = 2; i <= Math.sqrt(primNumRange); i++){
        if(primNumRange % i ===0){
            isPrime = false
            break
        }
    }
}

console.log(isPrime ? "prime":"not prime"); */


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

// pracise
/* 
let f1 = 1, f2 = 0, fabonicci;
for(let i = 0; i <= 10; i++){
    console.log(f2)
    fabonicci = f2 + f1;
    f2 = f1;
    f1 = fabonicci
}
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

// pracise
/* 
let arrayList = [10,23,55,77,33];
let totalArrayValueSum = 0;

arrayList.forEach((i) => {
    totalArrayValueSum += i
});

console.log(totalArrayValueSum);
 */

// 10.Find the maximum number in an array.

// let array = [1,2,3,44,53,62,7];
// let max = array[0];

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

// pracise 


/* let rangeArray = []

for(let i = 1; i <= 50; i++){
    rangeArray.push(i)
};

console.log(rangeArray);


console.log(Math.max(...rangeArray));


let max = rangeArray[0];
rangeArray.forEach((i)=> {
    if(i > max){
        max = i
    }
})
console.log(max) */


// 11.Print the elements of a 2D array.
/* 
let array1 = [[1,23,4,6],[4,55,33,5]]

array1.forEach((i) => {
    i.forEach((j) => {
        console.log(j)
    })
});
 */


// practise

/* let array = [[12,4,5],[3,5,24]];
console.log(array);
array.forEach((i) => {
    i.forEach((j) => {
        console.log(j)
    })
}); */


// 12.Flatten a nested array(without using built -in methods).

// let FArray = [23,55,3,[44,66,3],64,7];
// console.log(FArray);

// fromWork
// let nFarray = FArray.flat();
// console.log(nFarray);


// with recusion fuction methed get flatten array
/* let storeFalt = [];

function flatArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flatArray(arr[i])
        }else{
            storeFalt.push(arr[i])
        }

    }
};

flatArray(FArray);
console.log(storeFalt); */

// 13.Find the intersection of two arrays. ( intersection means find arr1 and arr same values)
/* let array1 = [2,4,6,7,3];
let array2 = [2,4,5,9,7];

let storeIntersection = [];

array1.forEach((i) => {
    if(array2.includes(i)){
        storeIntersection.push(i)
    }
});

console.log(storeIntersection); */

// 14.Rotate an array by n positions.
/* 
let array = [2,4,6,2,6,7];

for(let i = 0 ; i < 2; i++){
    array.unshift(array.pop())
};

console.log(array); */

// 15.Check if a string is a palindrome.
/* 
let palindromeStr = "racecar";
let isPalindrome = true

for(let i = 0; i <= palindromeStr.length /2; i++){
    if(palindromeStr[i] !== palindromeStr[palindromeStr.length - 1 -i]){
        isPalindrome = false
        break

    }
};

console.log(isPalindrome ? "true": "false"); */