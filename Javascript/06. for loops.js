

// for loop
// example 1
for (let i=0; i<10;i++){
    console.log("nameste world")
}

// example 2
for (let i = 5; i <51; i= i+5){
    console.log(i)
}


// example 3 for reverst statemnt
for (let i = 50;i > 4; i = i-5){
    console.log(i)
}


// oud and even 4 
for (let i = 0; i<10; i++){
    if (i % 2 !=0)
        console.log("nameshte world")
}



// // infinate loop 
// for (let i = 0; i <10;){
//     console.log("nameste world ")
// }


// 2 while loop
// example 1 
let j = 0
while (j <10){
    console.log("shubham meshram")
    j++
}


//  example 2 rever while 
let i = 10
while (i >0){
    console.log("shubham meshram")
    i--
}


// 3 do loop mostly not used this loops in our the programing laghvage
let k = 0
do{
    console.log("shubham meshram")
    k++
}
while(j < 10)


// 4 for in loop 
// example 1 
let animal = {
    name: "zebra",
    leg: 4
};

for ( let key in animal){
    console.log(key)
}

// for values 
// let animal = {
//     name: "zebra",
//     leg: 4
// };

for ( let key in animal){
    console.log(key, animal[key])
}


// 5 array in javascript
// example 1
let names = ["s","h","b", "a"]
for (let index in names){
    console.log(index)
}


// example 2 for values
for (let index in names){
    console.log(index, names[index])
}

// only for names 
for (let index in names){
    console.log(names[index])
}


// 6 for of loops

for (let name of names){
    console.log(name)
}