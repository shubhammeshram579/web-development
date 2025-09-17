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


PermutationsStr("abc")

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




