// for example numbers array
let num = [1,2,3,4,5,6,7,8,9]

console.log(num)

// indexing in arrays (index {0123456789} format)
console.log(num[0]);              //for stating index number values
console.log(num[num.length-1]);  //for end index number values 
console.log(num[num.length-3]);


// basis usedfull some array function as call as opration

// i push function for appnde array values
console.log(num.push(10));
console.log(num.push(11));
console.log(num);


//unshift in array for insert index wise values
console.log(num.unshift(0));
console.log(num.unshift(2));


// pop for delete last array value 
console.log(num.pop());


// shift for reverst index insert

console.log(num.shift());
console.log(num.shift(1));

// update in arrays index method [0] = any values you want
num[num.length-1] = 120;  //single value update and i am also apply str bool float values for example "shubham",true,22.55
num[2] = "shubham";
num[0] = 3.45;
num[3] = true;


// num.slice(2,4) = [130,150];  multiple update not work i will check 
// console.log(num.slice(2,4));



// part 2 array

const num1 = [1,2,34,5,56,77];
const name1 = ["s","h","u","b","h","a","m"];

// for find the value of index number 
console.log(name1.indexOf("h"));
console.log(name1.indexOf("b"));

// from indexOf
console.log(name1.indexOf("h",2));
console.log(name1.indexOf("h",0));

// find the last index 
console.log(name1.lastIndexOf());


// 2 includes function in array help tho matching values 

console.log(name1.includes("h")); // saposh h in this array list then consition is True 
console.log(name1.includes("l")); // saposh I is not in this array list then consition is flase 
console.log(name1.includes("h",2)); // saposh h is number of index 2 after in this list then condtion is True



// part 3 object in array 

let employees = [
    {
    name: "shubham",Salary: 15000
},
{
    name: "labham",salary: 13000

},{
    name: "aachal",salary: 14000
}];

// find the object values option1
console.log(employees.find(function(element){
    return element.name === "shubham"
}));

// one line code option 2 for find object 
console.log(employees.find(element => element.name === "labham"));




// part 4 some addtional functions
let name2 = [4,6,5,8,9,12,55]
let name3 = ["s","b","a","b","h","u","m"]

let name_margr = name2.concat(name3);
// concat two varible in Array


console.log(name2.concat('b'));
console.log(name2.concat(name3));

// spetuter method also marge  array variable

console.log([...name2,...name3]);
console.log([..."shubham",..."Meshram"]);


// sling in array

console.log(name_margr.slice(2,6));
console.log(name_margr.slice(6,8));
console.log(name_margr.slice(3,-1));
console.log(name_margr.slice(-3));


// part 5 for loop in array 


for (let i=0; i< name2.length; i++){
    console.log(name2[i])
};

for (let i=0; i< name3.length; i++){
    console.log(name3[i])
};

// for of loops

for (let k of name2){
    console.log(k)
}

// for each loops

// name3.forEach(function(name3,index)){
//     console.log(name3,index);
// }


// part 6 join and marge 


let join_array = ["s","h","u","b","h","a","m"];

sp_arr = join_array.join("-")

console.log(join_array.join()); // join multiple array
console.log(join_array.join("")) // shubham
console.log(join_array.join("-")) // s-b-u-b-h-u-m


// let split_array = ["s","h","u","b","h","a","m"];

console.log(sp_arr.split("-"))



// part 7 impotanse fuction in array 

// filter function
let population = [
    {
        name : "nagpur", pop : 150000
    },
    {
        name : "Pune" , pop : 130000
    },
    {
        name : "mumbai" , pop :230000
    },
    {
        name: "gondia" , pop : 2300
    }
]



console.log(population.filter(city => city.pop > 130000));
console.log(population.filter(city => city.pop < 130000));


// map function for opration like * - + / // ** 

console.log(population.map(city => city.pop * 5))






