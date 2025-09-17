//1. Recursive Function to Print Numbers from 5 to 1;


// Revision
// for(let i = 5; i > 1; i--){
//     console.log(i)
// }


function printNumofRangefiveToOne(n){
    if(n === 0){
        return 0
    }

    console.log(n)
    return printNumofRangefiveToOne(n - 1)
}


// printNumofRangefiveToOne(5)

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

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }


function printNoOfOneTofiv(n){
    if(n >= 5){
        return
    }

    console.log(n)
    return printNoOfOneTofiv(n + 1)
}

// printNoOfOneTofiv(1)


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


// function sumOfNatural(n){
//     let sum = 0

//     for(let i = 0; i <= n; i++){
//         sum += i
//     }

//     console.log(sum)
// }

// sumOfNatural(5)


function SumOfNat(n){
    if(n === 0){
        return 0
    };

    return n + SumOfNat(n - 1)

}

// console.log(SumOfNat(5))

function calculationSumOfNatural(n){
    // base 
    if(n === 0){
        return 0;
    };
    return n + calculationSumOfNatural(n - 1)

}

// console.log(calculationSumOfNatural(5))



// 4.Recursive Function to Calculate Factorial of n

// let factrialsum = 1;

// for(let i = 1; i <= 5; i++){
//     factrialsum *= i
// }

// console.log(factrialsum)


function factrialsum(n){
    if(n === 0){
        return 1
    };

    return n *= factrialsum(n - 1)
}

// console.log(factrialsum(5))

// using loops

function factrialSum(n){
    let factrialn = 1;

    for(let i = 1; i < n; i++){
        factrialn *= i
    }

    return factrialn
}

// console.log("factrialN",factrialSum(6))
 
function factrialNum(n) {
    // base case
    if(n === 0 || n === 1){
        return 1
    };
    
    return n * factrialNum(n - 1)

}


function FactrialExpriment(n) {
    //base case
    if(n === 0 || n === 1){
        return 1;
    }

    //print number 
    let num = FactrialExpriment(n - 1)
    let fac = n *= num
    return fac
}

// console.log(FactrialExpriment(5));


// console.log(factrialNum(5))



 // 5.Recursive Function to Calculate Fibonacci Sequence


//  let f1= 0,f2=1 , fibonacci;

//  for(let i = 0; i <= 10; i++){
//     console.log(f1)
//     fibonacci = f1 + f2
//     f2 = f1
//     f1 = fibonacci
//  }


function fibonaci(n){
    if(n <= 1){
        return n
    }

    return fibonaci(n - 1) + fibonaci(n - 2)
}

// console.log(fibonaci(10))

function printFiboncci(n){
    for(let i = 0; i <= n; i++){
        console.log(fibonaci(i))
    }
}

// printFiboncci(10)


// example 2
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


//  printFibnocciSwquen(10)


function fibonociiNum(n){
    if(n <= 1){
        return n
    }

    return fibonociiNum(n - 1) + fibonociiNum(n - 2)
}

// console.log(fibonociiNum(10))

function prinFibonic(n){
    for(let i = 0; i < n; i++){
        console.log(fibonociiNum(i))
    }
}


// prinFibonic(10)



   // 6. Recursive Function to Calculate x^n (Stack Height = n)

   function power2(x, n){
    if(n === 0 || x === 0){
        return 1
    }

    return x * power2(x, n - 1)

   }

   console.log(power2(2,5))



    function power(x, n) {
            if (n === 0) {
                return 1; // Base case: x^0 = 1
            }
            return x * power(x, n - 1); // Recursive call: multiply x with power(x, n-1)
    }

    // console.log(power(2, 5)); // Output: 32 (2^5 = 32)




