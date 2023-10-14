
// build function for same example 1 
function myfunction(a){
    console.log(a + 10)
}


myfunction(20)


// example 2
function strfuction(a,b,c){
    console.log(a + b + c)
}


strfuction(10,20,40)
strfuction("shubham ", "pramanand ","meshram")


// example 3 macking testi maggi 
function cookMaggi(maggi,pani,tapli){
    console.log("Your maggi will be ready in "
     +  maggi * 2
     + " minutes "
     + " and incredient use are:-  "
     + maggi + " maggi "
     + pani + " cups of water "
     + " using " + tapli + "pan ")
}

cookMaggi(4, 8, 1)


// example 4 

// create some variables 
let bread1 = prompt(" whitch bread whould you like to have :-");
let veggies1 = prompt(" what are the favorite vaggies");
let sauce1 = prompt("whitch sause ehould you like to have:- ")

// defind function for makesanwitch
function makeSandwich(bread,veggies, sauce){
    let sandwitch = bread + " bread " + veggies + " " + sauce + " sandwisch ";
    return sandwitch;
}


let vegSandwich = makeSandwich(bread1,veggies1,sauce1);

console.log(vegSandwich);

