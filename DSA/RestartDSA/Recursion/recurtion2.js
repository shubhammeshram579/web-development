// recusrtion part 2 intermided level

// q1 tower of hawai

function towerOfhawa(n,sorce,helper,destination){
    if(n === 0){
        return
    };

    towerOfhawa(n - 1, sorce,helper ,destination)

    console.log(`move dist ${n} from ${sorce} to ${destination}`)

    towerOfhawa(n - 1, helper,destination,helper)

}





function towerOfHawai(n,sorce,destination,helper){
    if(n === 0){
        return
    };

    towerOfHawai(n - 1 , sorce,helper,destination);

    console.log(`move dist ${n} from ${sorce} to ${destination}`)

    towerOfHawai(n - 1, helper,destination,helper)
}



const numberOfdist = 3
const sorcePeg = "A"
const destinationPeg = "C"
const helperPeg = "B"

// console.log(`solver tower of hanoi with ${numberOfdist} disct:`)

// towerOfHawai(numberOfdist,sorcePeg,destinationPeg,helperPeg);
// towerOfhawa(numberOfdist,sorcePeg,destinationPeg,helperPeg);



// q2 print reverse string abcd to dcba

// let strName = "abcd";
// let reverseStr = ""

// for(let i = strName.length -1; i >= 0; i-- ){
//     reverseStr += strName[i]
// }

// console.log(reverseStr)


function revercestr(str){
    let strorReverse = "";

    for(let i = str.length -1; i >= 0; i-- ){
        strorReverse += str[i]
    }
    console.log("strorReverse",strorReverse)
}

// revercestr("shubham")







// normal funtion 

function reverceStr(str) {

    let reverseSt = " "

    for(let i = str.length - 1; i >= 0; i--){
        reverseSt += str[i]
    }
    console.log(reverseSt)

}


// reverceStr("abcd")



// recustion function

function revustionRevese(str){
    if(str === ""){
        return ""
    }

    return revustionRevese(str.slice(1)) + str[0];

}

// console.log(revustionRevese("shubham"))

function recustionReverce(str){
    
    if(str === ""){
        return ""
    }

    return recustionReverce(str.slice(1))  + str[0]
}


// console.log(recustionReverce("abcd"))


// q3. find the first and last occurrence of an element (character) in a string.


function findthefirstandLast(str,targer, index= 0, first= -1, last= -1){

    if(index >= str.length){
        return {first, last}
    }

    if(str[index] === targer){
        if(first === -1){
            first = index
        }else{
            last = index
        }
    }

    return findthefirstandLast(str, targer, index + 1, first,last)

}

function findFistAndLast(str,target,index=0,first= -1 , last= -1){

    // base case 
    if(index >= str.length){
        return {
            first:first,
            last:last
        }
    }

    if(str[index] === target){
        if(first === -1){
            first = index
        }else{
            last = index
        }
    }


    return findFistAndLast(str, target, index + 1, first ,last)

}


let str = "abcaadah"
let target = "a"

let result = findFistAndLast(str,target)
let result2 = findthefirstandLast(str,target)

console.log("result2",result2)

// console.log(result);

//  4. check if an array is sorted (strictly increasing)


function ArraySortedOrNot(arr,index= 0){

    if(index >= arr.length -1){
        return true
    }

    if(arr[index] >= arr[index + 1]){
        return false
    }

    return ArraySortedOrNot(str , index + 1)
}

let ar = [1,7,4,5]
// console.log("is_Array_sorted",ArraySortedOrNot(ar))

function isSortedStrcalityIncrease(arr,index=0){

    // base case 
    if(index >= arr.length -1 ){
        return true
    }

    if(arr[index] >= arr[index + 1]){
        return false
    }

    return isSortedStrcalityIncrease(arr, index + 1)

}

let arr1 = [20,40,5,60,30];
// console.log(isSortedStrcalityIncrease(arr1))

let arr2 = [1,3,5,6]
// console.log(isSortedStrcalityIncrease(arr2))


// example2
function IsSorted(arr,index = 0){
    // base case
    if(index === arr.length -1){
        return true
    }

    if(arr[index] >= arr[index + 1]){
        return false
      
    }

    return IsSorted(arr , index + 1)

    
}

let array = [10,2,4]

// console.log(IsSorted(array))


// 5. move all "x" to the end of the string
function moveXToEnd(str) {
  // Base case: If the string is empty, return an empty string.
  if (str.length === 0) {
    return "";
  }

  // Get the first character of the string.
  const firstChar = str[0];
  // Get the rest of the string.
  const restOfString = str.substring(1);

  // Recursive step:
  if (firstChar === 'x') {
    // If the first character is 'x', move it to the end by appending it
    // to the result of processing the rest of the string.
    return moveXToEnd(restOfString) + firstChar;
  } else {
    // If the first character is not 'x', prepend it to the result
    // of processing the rest of the string.
    return firstChar + moveXToEnd(restOfString);
  }
}

// Example usage:
const originalString = "axbxcxdx";
const newString = moveXToEnd(originalString);
// console.log(newString); // Expected output: "abcdxxxx"


// example2

let strX = "asxxgdexdx"

function moveToEndX(str, index= 0,result = "", count= 0 ){

    if(index === str.length){
        return result + "x".repeat(count)
    }

    if(str[index] === "x"){
        count++
    }else{
        result += str[index]
    }

    return moveToEndX(str,index + 1,result,count)
}


// console.log(moveToEndX(strX));


// revision move to all end x 

function moveToEndX(str,index=0,result="",count=0){
    if(index === str.length){
        return result + "x".repeat(count)
    }

    if(str[index] === "x"){
        count++
    }else{
        result += str[index]
    }

    return moveToEndX(str, index + 1,result,count)

}


// console.log(moveToEndX(strX));


// 6. remove duplicate characters from a string using recursion in JavaScript.
function removeDuplicate(str, index=0,seen = new Set(),result= ""){
    if(index === str.length){
        return result
    }

    if(!seen.has(str[index])){
        seen.add(str[index])
        result += str[index]
    }

    return removeDuplicate(str,index + 1,seen,result)
}

// console.log(removeDuplicate("aabbcc"))


// 7. print all subsequences of a string using recursion in JavaScript.


function printSubsequnse(str,index=0,string= ""){
    if(index === str.length){
        console.log(string)
        return
    }

    printSubsequnse(str, index + 1,string + str[index]);
    printSubsequnse(str,index + 1, string)


}


// printSubsequnse("abc");


// 8.  print all unique subsequences of a string using recursion in JavaScript.


function uniqueSubsecquences(str,index=0,string="",subsequnset= new Set()){

    if(index === str.length){
        if(subsequnset.has(string)){
            return
        }else{
            console.log(string)
            subsequnset.add(string)
            return
        }
    }

    uniqueSubsecquences(str,index + 1, string + str[index],subsequnset)

    uniqueSubsecquences(str,index+1,string, subsequnset)


}


// uniqueSubsecquences("aab");



//9. Printing Keypad Combinations Using Recursion in JavaScript
        const keypadMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };




    function printKeypadCombinations(digits, index = 0, current = "") {
        if (index === digits.length) {
            console.log(current); // Print the formed combination
            return;
        }

        let letters = keypadMap[digits[index]]; // Get corresponding letters for the digit
        

        if (!letters) {
            printKeypadCombinations(digits, index + 1, current); // Skip if digit is not in the map
            return;
        }

        for (let char of letters) {
            printKeypadCombinations(digits, index + 1, current + char); // Recursive call with new character
        }
    }

    // Example usage:
    // printKeypadCombinations("23");












