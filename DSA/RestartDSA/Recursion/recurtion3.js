// recursion part 3 

//1.  Print All Permutations of a String Using Recursion in JavaScript.

function PermutationsStr(str,current=""){
    if(str.length === 0){
        console.log(current)
        return;
    }

    for(let i = 0; i < str.length; i++){
        let remaining = str.slice(0,i) + str.slice(i + 1);
        PermutationsStr(remaining, current + str[i])
    }

};


// PermutationsStr("abc")

// time complicity
// O(n!) big o of fectrial



//2. Count Total Paths in a Maze from (0,0) to (n,m) using Recursion in JavaScript


function pathcount(n,m) {
    if(n === 0 && m === 0){
        return 1
    };

    if(n < 0 || m < 0){
        return 0
    };

    return pathcount(n - 1 , m) + pathcount(n,m - 1);
}


// console.log(pathcount(2,2))


// place tiles of size 1xm in a floor of size nxm

function placeTiles(n,m){
    if(n === m){
        return 2
    }

    if(n < m){
        return 1;
    }

    let vertPlacements = placeTiles(n - m, m)
    let horPlacements = placeTiles(n - 1, m)

    return vertPlacements + horPlacements
}


// console.log(placeTiles(4,2))


// q3. find the number of what sin whithn you can invite n people to your party single or in pair 

function callGest(n){
    // base case 
    if(n <= 1){
        return 1
    }

    let way1 = callGest(n - 1)
    let way2 = (n - 1 ) * callGest(n - 2)

    return way1 + way2
}


// console.log(callGest(4))



// function printAllSubsets(n) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     nums.push(i);
//   }

//   const result = [];
//   const currentSubset = [];

//   function generateSubsets(index) {
//     // Base case: If we have considered all elements, add the current subset to the result
//     if (index === nums.length) {
//       result.push([...currentSubset]); // Push a copy of the currentSubset
//       return;
//     }

//     // Recursive step 1: Include the current element
//     currentSubset.push(nums[index]);
//     generateSubsets(index + 1);

//     // Recursive step 2: Exclude the current element (backtrack)
//     currentSubset.pop();
//     generateSubsets(index + 1);
//   }

//   generateSubsets(0);
//   return result;
// }

// // Example usage:
// const n = 3;
// const subsets = printAllSubsets(n);
// console.log(`Subsets of the first ${n} natural numbers:`);
// subsets.forEach(subset => console.log(subset));



function findAllSubsets(n) {
    const result = []; // Stores all generated subsets
    const currentSubset = []; // Stores the subset being built in the current recursive call

    // /**
    //  * Recursive helper function to find subsets.
    //  * @param {number} index - The current number being considered (from 1 to n).
    //  */
    function generateSubsets(index) {
        // Base case: If the index exceeds 'n', a complete subset has been formed.
        if (index > n) {
            result.push([...currentSubset]); // Add a copy of the current subset to the results
            return;
        }

        // Option 1: Include the current number in the subset
        currentSubset.push(index);
        generateSubsets(index + 1); // Recurse with the next number

        // Backtrack: Remove the current number to explore other possibilities
        currentSubset.pop();

        // Option 2: Exclude the current number from the subset
        generateSubsets(index + 1); // Recurse with the next number without including the current one
    }

    generateSubsets(1); // Start the recursion from the first natural number (1)
    return result;
}

// Example usage:
const n = 3;
const subsets = findAllSubsets(n);
console.log(`Subsets of {1, 2, ..., ${n}} are:`);
subsets.forEach(subset => console.log(subset));




