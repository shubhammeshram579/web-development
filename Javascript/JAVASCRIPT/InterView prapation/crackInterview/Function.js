console.log("basic of function");

// what is function 

// function add more funclity add block code store as a contained for used code reausbale function its call function

// simple example make a maggi in five minuste function
// wrinte a stape then store this stape as function it call function then you can used this function then your maggi is ready five minites


// example 

function maggi(){
    let stape1 = "gas "
    let stape2 = "boul "
    let stape3 = "water "
    let stape4 = "add maggi"
    let stape5 = "5 minits"

    return stape1 + stape2 + stape3 + stape4 + stape5
}


console.log(maggi());


function totalSum(n){
    let sum = 0
    for(let i = 1 ; i <= n; i++){
        sum += i
    }
    return sum
};

let ans = totalSum(10);

console.log(ans);