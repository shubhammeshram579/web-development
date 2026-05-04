console.log("hello js")



// bacic of js
// varible

// var user = "subham"
// let user2 = "labham"
// const user3 = "aachal"

// let arr = [1,2,3,4,5,6,7]
// let page = 5;
// let limit = 6;

// function filterdata(arr , page, limit) {
//     let newarr = []

//     // arr.filter((i) => {
//     //     if(i >= page && i <= limit){
//     //         newarr.push(i)
//     //     }
//     // })

//     // for(let i = 0; i <= arr.length; i++){
//     //     if(arr[i] >= page && arr[i] <= limit){
//     //         newarr.push(arr[i])
//     //     }
//     // }

//     arr.forEach((i) => {
//         if(i >= page && i <= limit){
//             newarr.push(i)

//         }
//     })

//     console.log(newarr)

// }

// filterdata(arr,page,limit)



// for(let i = 2; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }





// let nums = [1,2,3,4,5,6,7]
// let k = 3

// // let end = nums.slice(-3)
// // let start = nums.slice(0,4)

// // let marge = [...end,...start]

// // console.log(end)
// // console.log(start)
// // console.log(marge)

// const rotete = function(nums ,k){

//     let end = nums.slice(-k)
// let start = nums.slice(0,4)

// let marge = [...end,...start]

// return marge




// }

// console.log(rotete(nums,k))


// basic of javas script

// what is varible
let user = "shubham";
const user2 = "kunal";
var user3 = "rahul";

console.log(user,user2,user3)

// what is datatype

// primatvi 
// data type = Number, string , int, float, Boolean, null, undefined,Symbol
// non primative = {}, [], ();

let obje = {
    name:"shubham",
    age:28
};


let arr = [1,2,3,4,5,6];

// normal function

function abc(a,b) {
    return a + b;

}

let getvale = abc(10,20);
console.log(getvale);


const firtcalsfinc = function(a,b) {
    let mutiplication = a * b;
    console.log(mutiplication);

}

firtcalsfinc(10,50);

const arowfun = (a,b) => {
    return a + b

};


console.log(arowfun(20,50));


let cust = function(name,age){
    this.name = name,
    this.age = age
}

const res = new cust("shubham","28");

console.log(res);

// (
//     function(){
//         console.log("shubhm")
//     }
// )();


let highord = function(a){
    return function(b){
        return a + b
    }
}

let resu = highord(10)(20)
console.log(resu);


let hig2 = () => {
    let count = 0;

    return (plus) => {
        return count + plus
    }

}

let re3 = hig2()(10)
console.log(re3);


let arr2 = [1,4,5,6,7,7];

// let printarr = (arr) => {

//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }

// printarr(arr2);


// arr2.forEach((i) => {
//     console.log(i)
// })


arr2.filter((i) => {
    if(i = 4){
        console.log(i)
    }
})

let match = arr2.find((i) => (i == 4))
console.log(match)

let newarr = arr2.map((item) => {
    if(item == 4){
        return item = 10;
    }
    return item
})

console.log(newarr);
console.log(arr2);

let total = arr2.reduce((a,total) => (a + total))
console.log(total);


let sumtotal = 1;

arr2.forEach((item) => {
    sumtotal *= item
})

// console.log(sumtotal);


// marge 

let maragra = arr.concat(arr);

console.log(maragra);

arr.push(20)
console.log(arr);

let rev = arr.reverse()

let sor = rev.sort((a,b) => (b - a))

console.log(sor)

console.log(arr2.shift())
console.log(arr2.unshift(-1))
console.log(arr2.slice(2,6))

const duplicate = arr2.filter((item,index) => arr2.indexOf(item) != index);

console.log(duplicate);

// remove 

let numb = [1,4,5,6,7,7];

let removeduplic = [...new Set(numb)];
console.log(removeduplic);


let marge1 = [...numb,...arr];

console.log(marge1)

let pbj = {
    name:"shubham",
    age:27
}

let pbj2 = {
    add:"labham",
}
let pbj3 = {
    add2:"labham",
}

let margeob = {...pbj,...pbj2,...pbj3}

console.log(margeob);

let [a,b] = marge1
let {add,age} = margeob
console.log(a);
console.log(add);
console.log(age);

let data = 2;
let result = new Promise((res,rej) => {
    if(res){
        setTimeout(() => {
          console.log("hello")

        },3000)
    }
})

result.then((data) => console.log(data)).catch((err) => console.log(err));


const getdata = async () => {
    let res = await data

    console.log(res)
}

getdata()




let matipleArray = [2,5,6,7,8,10];

let updatemultiple = [12,55];


let updatenewarray = matipleArray.map((i) => {
    if(i >= 6 && i <= 8){
        return i = updatemultiple;
    }
    return  i
})


console.log(updatenewarray);


let near = updatemultiple.fill((30,10),1,2);

// console.log(near)


let stlenth = "i love younewwir"

let spitword = stlenth.split(" ");
let maxword = ""


for(let ward of spitword){
    if(ward.length > maxword.length){
        maxword = ward
    }
}


console.log(maxword);


let arrmax = [3,5,20,5,10];

let max2 = [0];

arrmax.forEach((i) => {
    if(i > max2){
        max2 = i
    }
})

console.log(max2);


let num = 345;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;        // get last digit
  reverse = reverse * 10 + digit; // add to reverse
  num = Math.floor(num / 10); // remove last digit
}

console.log(reverse);



let reverstr = "shubham";
let rever = ""

// for(let i = reverstr.length -1 ; i >= 0; i--){
//     console.log(reverstr[i])
//     rever += reverstr[i]
// }

// console.log(rever)



let arrv = [10,2,30,5,20,40,15,18]

let joinarr = ["shubham","meshram"]

// console.log(joinarr.join(" "))

let flateArray = [1,3,4,5,[4,6,3]]
// console.log(flateArray.flat())



let arrfilter = []

arrv.filter((i) => {
    if(i >= 5 && i <= 20){
        arrfilter.push(i)
    }
})

let basicsort = []
let max = [0]

for(let i = 0; i < arrv.length; i++){
    if(arrv[i] > max  ){
        max = arrv[i]
        // console.log(arrv[i])
        
    }
}



let newsort = arrfilter.sort((a,b) => (a - b))

// console.log(`5 to 20 range ${newsort} sort ${basicsort} max ${max}`);















