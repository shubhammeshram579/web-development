

// 1. Print numbers from 1 to 10 using a loop.

for(let i = 1; i <= 10; i++){
    console.log(i)
};



// 2.Print even numbers between 1 and 20.

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
};

// 3. Print the sum of numbers from 1 to 100.

let total = 0;

for(let i = 1; i <= 100; i++){
    total += i
};
console.log(total);


// 4. Reverse a string using a loop.

let str = "shubham";
let reveceStr = ""
for(let i = str.length -1; i >= 0;i-- ){
    reveceStr += str[i]
}

console.log(reveceStr);



// 5.Print each character of a string.

let str2 = "labham";
for(let i = 0; i < str2.length; i++){
    console.log(str2[i]);
}


// 6.Print the factorial of a number(e.g., 5!).

// practise 1 * 2 * 3 * 4 * 5

let fatrialNum = 1;
for(let i = 5; i >= 1; i--){
    fatrialNum *= i
};

console.log(fatrialNum);


// 7.Check if a number is prime.

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



// 8.Print Fibonacci series up to 10 terms.


let f1Num = 0, f1Ind = 1, fibonnacci;

for(let i = 0 ; i < 10; i++){
    console.log(f1Num)
    fibonnacci = f1Num + f1Ind
    f1Ind = f1Num
    f1Num = fibonnacci
};



// 9.Sum all the elements in an array.


let array = [1,2,3,4,5,6,7];
let totalSum = 0;

array.forEach((i) =>{
    totalSum += i
});

console.log(totalSum);



// 10.Find the maximum number in an array.

let array2 = [1,2,3,44,53,62,7];
let max = array[0];

// for used fromwork
// console.log(Math.max(...array));

array2.forEach((i) => {
    if(i > max){
        max = i
    }
})
console.log(max)


// 11.Print the elements of a 2D array.

let array2d = [[1,23,4,6],[4,55,33,5]]

array2d.forEach((i) => {
    i.forEach((j) => {
        console.log(j)
    })
});
 


// 12.Flatten a nested array(without using built -in methods).

let FArray = [23,55,3,[44,66,3],64,7];

// fromWork
// let nFarray = FArray.flat();

// with recusion fuction methed get flatten array
let storeFalt = [];

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
console.log(storeFalt);


// 13.Find the intersection of two arrays. ( intersection means find arr1 and arr same values)
let arrayI = [2,4,6,7,3];
let arrayII = [2,4,5,9,7];

let storeIntersection = [];

arrayI.forEach((i) => {
    if(arrayII.includes(i)){
        storeIntersection.push(i)
    }
});

console.log(storeIntersection);



// 14.Rotate an array by n positions.

let RArray = [2,4,6,2,6,7];

for(let i = 0 ; i < 2; i++){
    RArray.unshift(RArray.pop())
};

console.log(RArray); 


// 15.Check if a string is a palindrome.

let palindromeStr = "madam";
let isPalindrome = true

for(let i = 0; i <= palindromeStr.length /2; i++){
    if(palindromeStr[i] !== palindromeStr[palindromeStr.length - 1 -i]){
        isPalindrome = false
        break

    }
};

console.log(isPalindrome ? "palindrome str": "not palindrome str"); 



// 16.Implement bubble sort using a loop.


let BArray = [2,5,2,6,7,9,11,32,55];

// fromwork
// console.log(array.sort((a ,b ) => (b - a)));

for(let i = 0; i < BArray.length - 1; i++){
    for(let j = 0; j < BArray.length - 1 - i; j++){
        if(BArray[j] > BArray[j + 1]){
            [BArray[j], BArray[j + 1]] =[BArray[j + 1] , BArray[j]]
        }

    }
}

console.log(BArray);



// 17.Count the occurrence of each element in an array.

let CoArray = [2,4,2,2,77,3];
let count = {};

CoArray.forEach((i) => {
    count[i] = (count[i] || 0) + 1
})

console.log(count);




// 18.Generate a pyramid pattern.

let pyramidNum = 10;

for(let i = 0; i < pyramidNum; i++){
    console.log(" ".repeat(pyramidNum - 1) + "*".repeat(i * 2))
}



//19.Find the missing number in an array of consecutive numbers.

let arrayList = [1,2,3,5,6,7,10];
let messing;

// it is find single messing value only
for(let i = 0; i < arrayList.length - 1; i++){
    if(arrayList[i + 1] - arrayList[i] !== 1){
        messing = arrayList[i] + 1;
        break
    }
}

console.log(messing);


// multiple messing values

let messing2 = []
for(let i = 0; i < arrayList.length - 1; i++){
    if(arrayList[i + 1] - arrayList[i] !== 1){
        for(let j = arrayList[i] + 1; j < arrayList[i + 1]; j++){
            messing2.push(j)
        }
    }
}

console.log(messing2);


// 20.Transpose a matrix.

let matrixarry = [[1,2,3],[4,5,6],[7,8,9]];

let tranformMatrix = [];

if(matrixarry.length > 0 && Array.isArray(matrixarry[0])){
    for(let i = 0; i < matrixarry[0].length; i++){
        tranformMatrix[i] = [];
        for(let j = 0; j < matrixarry.length; j++){
            tranformMatrix[i][j] = matrixarry[j][i]
        }
    }
console.log(tranformMatrix);
}else{
    console.log("error")
}
