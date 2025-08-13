// basic in js 
var a = "hi shubham meshram"
var b = "hello my dear dell"

console.log(a)

setTimeout(() => {
    console.log(b)
},4000)


// topic vise learn
// what is varible?

// basic defination : varible is decration varible and insilation as store value it call varible 


var v1; // decration varible 
v1 = "labham" // it call insilation value 

// how many type of varible?

// var: is old es5 veriosn and it is function scoop and it is updateble 
// let and const: is new es6 veriosn and it is block scoop and it is not updateble 


// what is dtype?
// two type of datatype in js
// 1. primetive dtype

// 1. primetive dtype
var str = "shubham"
var num = 1234
var floatValue = 12.55
var BooleanV = true
var nullV = null
var undefindV = undefined
var BigIntV = 1234455n


// 2. non primetive dtype 
// object {} , array [] and function ()

let obj = {
    name:"shubham",
    age:27
}

let arr = [1,2,3,4,6,"shubham"]

function ab(){
    console.log(`object ${obj} and array ${arr}`)
}


//3. oprates in js 
// what mease + - / * // ** % this is basic oprater 

// how many type of oprater 

// 1 arthmic oprater + - / * // ** % 
console.log(1 + 2)
// 2. assing oprater += -= *= 
// console.log(1 += 2)
// 3. comprasigin oprater > < >= <= == === 
console.log(2 > 1)
// 4. logical oprater and not or &&, ! ||


//4. what is hoisting
// meanse before you declation any varible used use and execute of line is call hoisting 

// example

console.log(Housting) // giving the undeifind value 
var Housting // varible declation 
Housting = "i am softwere developer" // insilation value

console.log(Housting);


// 5. conditional statament
// means set condition as boolean value like true and false 

// example 
if(true){
    console.log("reasult true")
};

if(false){
    console.log("reasult false")
}


// if else concept
let result = "pass"
if(result === "pass"){
    console.log("congruc your result is pass")
}else{
    console.log("your result is fail")
}


// if, else if , else
let time = 12;

if(time === 5 ){
    console.log("good morning")
}else if(time === 12){
    console.log("good afternoon")
}else{
    console.log("good evening")
}


// nestest condition
let evennum = 11
if(evennum % 2 === 0){
    console.log("even")
}else{
    console.log("odd")
}

// tentery condition 
let asn = result === "pass" ? "result pass" : "result is fail"
console.log(asn)


// logical condition && || !

// let time2 = prompt("time is:")

// if(time2 >= 5 && time2 <= 12 ){
//     alert("good morning")
// }else if(time2 >= 12 && time2 <= 16 ){
//     alert("good afternoon")
// }else if(time2 >= 16 && time2 <= 22){
//     alert("good evening")
// }else{
//     alert("good night")
// }


// switch condtional 

let items = "apple"

switch(items){
    case "apple":
        console.log("fruit")
        break
    case "potato":
        console.log("vegetable")
        break
    default:
        console.log("others items")
}


// 6. loops
// means print of reapeted values it call loops
// how many type of loops in js

// for loop, while loop, do while loop, forEach loop , forin loop and off loop


// 1. print 1 to 10 number of range value 

// for(let i = 0; i < 10; i++){
//     console.log(i)
// };

// 1. print 10 to 1 revece number of range value 

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }


// store array formate 1 to 5 number value 
let array = []

// for(let i = 0; i < 5; i++){
//     array.push(i)
// };

// console.log(array)

// print table range 2 to 20
// for(let i = 2; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// };

// print string value as reverse and store new string 

let str3 = "shubham"
let newStr = ''

// for(let i = str3.length -1; i >= 0; i--){
//     newStr += str3[i]
// }

// console.log(newStr);


// print array value 

let arrayV = [2,4,5,6,7,8]


// basic loop
// for(let i = 0; i < arrayV.length; i++){
//     //  console.log(i) // get index value
//     console.log(arrayV[i]) // get acctual value
// };

// forEach function it is using for only array value 
// arrayV.forEach((i) => {
//     console.log(i + 20)
// });



let str4 = "shubham meshram";

// for(let i in str4){
//     // console.log(i)
//     console.log(str4[i])
//     // console.log(str4)
// };


// for(let i of str4){
//     console.log(i)
// }


// while loop 

let Wvalue = 0;

// while(Wvalue <= 10){
//     console.log("shubham")
//     Wvalue += 1
// }


// 7. what is function ?
// function mease in js block code store muly type code it call function then used this funtion reauseble
// mease oragrance way to store recepy store stape to macking food then used function macking recipe reauseble it call function

// simple difination: function store block function container store multiple code it call function 

// how many type of function ?
// function declation , fun expresstion , fist class function , 
// higOredr function , iffe function , controcuter funtion , array func 
// curring func , closuser function , callback fun


// basic fun 
function NormalFun() {
    console.log("hello i am basic declation")
}

const firstClassFun = function(){
    console.log("hello i am first class and expression fun")
}


const HighOrederFun = function(a){
    return function(b){
        return a + b
    }
}

const ans = HighOrederFun(10)(29)
console.log(ans);


(
function(){
    console.log("i am iffe function")
}
)();


function contruction(){
    this.name = "shubham",
    this.age= 20
}

const e1 = new contruction()

console.log(e1);

// array fun 

const ArrowF = (a,b) => {
    console.log(a + b)

}

ArrowF(10,40);


// callback 
// setTimeout(() => {
//     console.log("hello i'm callback function")
// },2000);

// let interID = setInterval(() => {
//     console.log("hey i'm also call back function")
// },1000);


// setTimeout(() => {
// clearInterval(interID);
// },10000)


// clouser

// example1
const ClouserFun = () => {
    let couter = 0
    return () => {
        couter++
        console.log(couter)
    }
}

const s1 = ClouserFun()
s1()
s1();


// example 2 for my own
let clouserFunct2 = (a) => {
    return (b) => {
        return (c) => {
            console.log( a + b + c)
        }
    }
};

let ClosurAns = clouserFunct2(10)(20)(50)






// part 8 what is array in js


// array is data statucute to store multiple value store as [] array formet it call array 
// array is given freedom to store multiple value it call array 


// exaple 
let array1 = [1,2,3,4,5,6,7];
let arrayStrV = ["shubham",55,66,77,"meshram"]

// it call alos json formate
let arrayObjV = [
    {
        name:"shubham",
        age:27
    },
    {
        name:"labham",
        age:20
    },
    {
        name:"rahul",
        age:27
    },
];


console.log(array1)

// select array value index wise
console.log(array1[0])
console.log(array1.slice(0,3))
console.log(array1.shift())
console.log(array1.unshift())
console.log(array1.slice(-1))
console.log(array1.slice(-2))
// console.log(array1.splice(2,4)) delete index wise values 

console.log(array1)


// marge array values 
let newmerge = array1.concat([arrayStrV])
console.log(newmerge)
let newArraFlat = newmerge.flat()

console.log(newArraFlat)


// merge array value with spreat method
let array2 = [22,33,55,6];

let finalMerge = [...array2,...newArraFlat]

console.log(finalMerge)

// map function wise update
let updatedArray2 = finalMerge.map((item) => {
    if(item === "shubham"){
        return 102
    }
    return item
})

console.log(updatedArray2)

// index wise updated
updatedArray2[14] = 5000;
console.log(updatedArray2)

// let fillUpdated = updatedArray.fill(499,15,15)
// console.log(fillUpdated)


let findV = updatedArray2.find((items) => (
    items === 102
))

console.log(findV)


updatedArray2.filter((items) => {
    if(items >= 50){
        console.log(items)
    }
});

let lessTen = updatedArray2.filter((i) => ( i <= 50))
console.log(lessTen);

// advance way 
let sorted = updatedArray2.sort((a,b) => (a - b))
console.log(sorted);

let sored = []
let index = [0];

// get unicq sort values
updatedArray2.map((item) => {
    if(item > index){
        index = item
        sored.push(index)
    }
})

console.log("old",sored)


let totalamt = sored.reduce((a,totla) => (a + totla))
console.log(totalamt)


updatedArray2.forEach((items) => {
    console.log(items + 10)
})


console.log(updatedArray2.reverse())

// delete array vales
updatedArray2.pop()

console.log(updatedArray2)

updatedArray2.splice(5,8)

console.log(updatedArray2)


// part 9 object in js
// what is obj? 
// object is store of person of details as key and pair formate it call objec
// object is alos call json formate {}

// exampel1

// object decrlation 

let obj1 = {
    firstName:"shubham",
    lastName:"meshram",
    age:28,
    address:"gondia",
    city:"gondia",
    state:"MH"
}


console.log(obj1);

// select objec like first and city
console.log(obj1.firstName)
console.log(obj1.city)

// anoter method also slsect 
console.log(obj1["age"])
console.log(obj1["state"])


// find key and values using object mettod

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))


// updated obj values
obj1.address = "murpar"

console.log(obj1)

// it is freeze the value do not update to acced
// Object.freeze(obj1)

obj1.city = "germany"

console.log(obj1)


// add new object value user assign method
let newObj = {
    mobile:8399482980
}

let finalObj = Object.assign(obj1,newObj)

console.log(finalObj);



function controcuter2() {
    console.log(this.name)

}


let obje2 = {
    name:"labham"
}

let ddd = controcuter2.call(obje2)


// what is promises function 

// promise function is ascrse function it is used for fatch 

const data = [2,4,56]
// const resp = new Promise((res,rej) => {

//     setTimeout(()=> {
//         res(data)
//     },3000)

// }).then((data) => {
//     console.log("success",data)

// }).catch((error)=> {
//     console.log("sonthing wrong",error)
// })


// resp()


// asycnc and await


// const advanceAS = async () => {


//     fetch(data).then((data) => {
//         console.log("data",data)
//     }).catch((error) => {
//         console.log(error, "somthing went wrong")
//     })

// }

// advanceAS()


// const fatchdata = async () => {
//     const strore = await data
//     console.log(strore)
// }

// fatchdata()


// destucturing 

let deArray  = [1,2,4,"shubham",33]

let [da,db] = deArray

console.log(da)
console.log(db)


let [dd,dd2,...d4] = deArray

console.log(dd)
console.log(dd2)
console.log(d4)


let obd = {
    first:"shubham",
    last:"meshram",
    arr:[1,4,5,6],
    address:"gondia"
}


let {first,last,...oterintem} = obd


console.log(first)
console.log(last)
console.log(oterintem)



// defult paramater 

const Argiment = (a=10,b=50) => {
    console.log(a + b)

}

Argiment(50,20);



// this call bind apply





































