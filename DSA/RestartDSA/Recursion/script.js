//1. Recursive Function to Print Numbers from 5 to 1;

// in js

// for(let i = 5; i >= 1; i--){
//     console.log(i)
// }


function PrintFivToOne(n) {

    // base case candintion

    if(n === 0){
        return;
    }

    console.log(n)

    PrintFivToOne(n - 1)
}


// PrintFivToOne(5)




// 2. Recursive Function to Print Numbers from 1 to 5;

// in js 

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// };


function PrintToFive(n) {
    if(n >= 5){
        return;
    }

    console.log(n)
    PrintToFive(n + 1)

}

// PrintToFive(1)




//3. Recursive Function to Calculate the Sum of First n Natural Numbers;

function calculationSumOfNatural(n){
    // base 
    if(n === 0){
        return 0;
    };
    return n + calculationSumOfNatural(n - 1)

}

// console.log(calculationSumOfNatural(5))



// 4.Recursive Function to Calculate Factorial of n

function factrialNum(n) {
    // base case
    if(n === 0 || n === 1){
        return 1
    };
    
    return n * factrialNum(n - 1)

}


// console.log(factrialNum(5))



 // 5.Recursive Function to Calculate Fibonacci Sequence

 function fubonacii(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fubonacii(n - 1) + fubonacii(n- 2)

 }


 function printFibnocciSwquen(n) {
    for(let i = 0; i < n; i++){
        console.log(fubonacii(i))
    }
 }


 printFibnocciSwquen(10)



