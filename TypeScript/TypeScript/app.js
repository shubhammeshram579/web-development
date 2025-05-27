"use strict";
//1. what is typeScript?
// typeScript is node.js comfiler to set dtype for handling the large dtype of error 
// in javascript is disind the data type as per value you set like number str etc...
// but type is give the facility to set dtype as a varible dtype is only work
// example
// in js
let a = 20;
// in typeScript
let b;
// Type 'number' is not assignable to type 'string'.ts(2322)
// let b: string
// b = 20
b = "shubham";
// you try update str to number also given error
// Type 'number' is not assignable to type 'string'.ts(2322)
// let b: string
// b = 50
b = "labham";
//2. basic dtype
// i. promative dtypes
// ii. array 
// iii. tuples
// iv. Enums
// v. Any , Unknown ,Void , null, undfined, never
// 1.  primative dtype:
//  i. premative dtype: number , string, boolean, null , undifind, bigit,symple
// ii. non-premative and say refrece dtype: {}, [], () , object,array, function
let num = 123;
let str = "shubham";
let isTrue = true;
let isNull = null;
let isUndiend = undefined;
// let bigit = 123456633333n
// let simbol = symbol(["data"])
// non-premative
let obj = {
    name: "shubham",
    age: 27
};
let ary = [12, 44, 55];
function ab() {
    let a = 20;
    let b = 30;
    return a + b;
}
ab();
// 2. Array 
// in js
let array = [12, 44, 55, 6, { name: "s", age: 23 }];
// in tsc
// i disied array2 type is number then it is only set the value number other wise giving error
//Type 'string' is not assignable to type 'number'
// let array2 : number[] = [23,44,55,"shubham"]
let array2 = [23, 44, 55];
// 3. tuples
// tuples means set multiple dtype 
let arrayT = [123, "shubham"];
// if i pass array value like that it given type error
// Type 'string' is not assignable to type 'number'.
// let arrayT2 : [number,string] = ["labham",123];
// 4. Enums
// example1
var Username;
(function (Username) {
    Username["admin"] = "admin";
    Username["guest"] = "guest";
})(Username || (Username = {}));
Username.admin;
// example 2
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCECS"] = "200 ok";
    StatusCode["ERROR"] = "400 somthing get error";
})(StatusCode || (StatusCode = {}));
StatusCode.SUCCECS;
// 5. Any , Unknown ,Void , null, undfined, never
// i. Any
// any is like js concept it set a dtype as per the value
// let Any1: any
let Any1;
Any1 = 20;
Any1 = "shubham";
// but i set dtype like number ,str
let Any2;
// Any2 = 120 //Type 'number' is not assignable to type 'string'
Any2 = "Labham";
// ii. Unknown
// Unknown is similer to any but is diffence becosue it given the check dtype then updated value
let U1;
U1 = 10;
// accese to number functions
U1.toExponential();
U1 = "shubham";
// Property 'toExponential' does not exist on type 'string'
// U1.toExponential()
// set condition then accese the function
if (typeof U1 === "string") {
    U1.toLocaleUpperCase();
}
// iii. void
function abc() {
    console.log("shubham");
}
abc();
function abcs() {
    return 12;
}
function abcs2() {
    return "shubham";
}
// iv. null 
// let isNul:null;
let isNul; // it call union in js or
isNul = "shubham";
// v. undifind
let Isun = undefined;
// vi. never for used pred while loop or for loops
// part 2 typescript
// 1. Type infrence
// i. Understanging type infrence
// ii. Type Annotation.
// 1. Type infrence
//  means automaticaly check data and defind data type it call type infrence
let Ia = 12; /// number
let ia1 = "12"; /// dtype is sting
// 2. type annotation
//means set the varuble of data store datatype like sting , number boolean etc..
// it call type annotation
let a1;
a1 = 8833;
let a2;
a2 = "shubham";
a2 = 24555;
a2 = true;
// Type '12345n' is not assignable to type 'string | number | boolean'
// a2 = 12345n; but i set bigite number then given error
// example2 
let a3;
function NameoFage(a3, b) {
    a3 = "his age is:";
    b = 25;
    console.log(`${a3} ${b}`);
}
function abcd(obj) {
    console.log(`user name is ${obj.name} and age ${obj.age} gender is ${obj.gender}`);
}
abcd({ name: "shubham", age: 27, gender: "male" });
// both info used father and son it's call exted the interface
function FAndSon(obj) {
    console.log(`user is ${obj.firstname} ${obj.lastName} gender is ${obj.gender}`);
}
FAndSon({ firstname: "shubham", lastName: "meshram", gender: "male" });
let pendData;
pendData = 1234;
let pendata2;
pendata2 = 12, "shubham", true; // it is accept
// pendata2 = 12,"shubham",true, 2233n // bigigit dtype not set it is given error
// in function
function pendFun(obj) {
    console.log(obj);
}
function FInterType(obj) {
    console.log(obj.name);
    console.log(obj.email);
    obj.getDetails("labham");
}
FInterType({ name: "shubham", email: "shubham321@gmail.com", getDetails: (user) => {
        console.log(`details for ${user}`);
    } });
// part3 class and object
// topic to learn
// 1. class defination
// 2. Contructors
// 3. Accsess modifire (public,privat,protected)
// 4. ReadOnly Properties
// 5. Optional Properties
// 6. Parametes Properties
// 7. Getter and Setter Properties
// 8. Static number
// 8. Abtrack classes and methods
// 1. basic of class 
class Building {
    constructor() {
        this.name = "satweek hights";
        this.floor = 4;
        this.left = true;
    }
}
let b1 = new Building();
let b2 = new Building();
// 2. Contructors
// contructors function means it creating same type data then used multiple same function used it call controctors function
// basic of custuctor example 1
class ElectonicItem {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        console.log(`${name} and ${brand} and ${price}`);
    }
}
let mobile = new ElectonicItem("Moto", "moto g", 12000);
let laptop = new ElectonicItem("dell", "insprin", 54000);
// example 2 for defaul value set
class Fruits {
    constructor(name, price = 0) {
        this.name = name;
        this.price = price;
        console.log(`${name} and ${price}`);
    }
}
let F1 = new Fruits("Apple");
// example 3 sting defualt value 
class Channel {
    constructor(name, like, Taimnuil = "tainail is not found") {
        this.name = name;
        this.like = like;
        this.Taimnuil = Taimnuil;
        // also handel condition base if default taimnail is not work
        if (!Taimnuil) {
            this.Taimnuil = "not availble";
        }
        console.log(`${name} and ${like} and ${Taimnuil}`);
    }
}
let C1 = new Channel("Youtube", 1200);
// 3. Accsess modifire (public,privat,protected)
// public
class BagMaker {
    constructor(brand, size, price) {
        this.brand = brand;
        this.size = size;
        this.price = price;
        // first way to upaded value
        this.brand = brand;
    }
    // second way to change and update value
    Changing() {
        this.brand = "American bag";
    }
}
let bag1 = new BagMaker("skybag", 22, 1200);
// third way to change and updated value
bag1.brand = "newSkyfs";
// ii. Private
// private also change value under the contructors anywhere
class TrolyBagMaker {
    constructor(brand, qty, price) {
        this.brand = brand;
        this.qty = qty;
        this.price = price;
        this.brand = brand;
    }
    Changing() {
        this.brand = "skyBang";
    }
}
const Abag1 = new TrolyBagMaker("ammerican trost", 2, 1200);
// if i try to updated out site then get error
// Property 'brand' is private and only accessible within class 'TrolyBagMaker'
// Abag1.brand
// if i change using under the contructoon function with hlep of methond then it is updated 
Abag1.Changing();
// check on browger then i get updated value 
// TrolyBagMaker {brand: 'skyBang', qty: 2, price: 1200}
// iii public extend and used private then face the issiues
// example1
class CurryBagMaker {
    constructor(type) {
        // Property 'type' is private and only accessible within class 'CurryBagMaker'.
        this.type = type;
    }
}
class PlasticBagMaker extends CurryBagMaker {
    constructor(type) {
        super(type);
    }
    getValue() {
        console.log(this.type); // Property 'type' is private and only accessible within class 'CurryBagMaker'.
    }
}
const CB1 = new PlasticBagMaker("plasticBag");
// example2
class CurryBagMaker2 {
    constructor(type) {
        this.type = type;
        this.type2 = "nonPlastic";
    }
}
class PlasticBagMaker2 extends CurryBagMaker2 {
    constructor(type) {
        super(type);
    }
    getValue() {
        // console.log(this.type, this.type2) // Property 'type2' is private and only accessible within class 'CurryBagMaker2'
        console.log(this.type);
    }
}
const CB2 = new PlasticBagMaker("non_plasticBag");
// iv. protected
// means  if we are used private then get error
// how to solve the not giving the error then we are used protected 
// it working both if you used public or private then not get ant dtype error 
class AirBagMaker {
    // if you want to used like private and public then used protected
    constructor(type) {
        this.type = type;
    }
}
class newBagMaker extends AirBagMaker {
    constructor(type) {
        super(type);
    }
}
const NB1 = new newBagMaker("AirBag");
// v.  readonly  properties
// readonly  it help to do not updated to permisstion to updated new value
class ReadOnlyUser {
    constructor(username) {
        this.username = username;
        console.log(`username is: ${username}`);
    }
    getChangeUser() {
        // this.username = "pallavi" //Cannot assign to 'username' because it is a read-only property.
    }
}
const AuthAuser = new ReadOnlyUser("aachal");
AuthAuser.getChangeUser();
// vi getter and setter
// example1
class GSUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`username: ${name} and age ${age}`);
    }
    getter() {
        return this.name;
    }
    setter(value) {
        this.name = value;
    }
}
let GS1 = new GSUser("shubham", 27);
GS1.getter();
GS1.setter("labham");
// out: GSUser {name: 'labham', age: 27}
// example2
class GSUser2 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        console.log(`username: ${name} and age ${age}`);
    }
    get getter() {
        return this._name;
    }
    set setter(value) {
        this._name = value;
    }
}
let GS12 = new GSUser("aachal", 23);
GS12.getter();
// out: GSUser {name: 'aachal', age: 23}
GS12.setter("pallavi");
// out GSUser {name: 'pallavi', age: 23}
// vii. static members
// stitic is given the fucntionlity to withoud defind
// varible of class used and run as per the your class contruction function.
// example1 for class used create varible then access value 
class StackText {
    constructor() {
        this.version = "2.00";
    }
}
const St1 = new StackText();
St1.version;
// whithoud defins varible used 
class books {
    static getRandomNumber() {
        return Math.random();
    }
}
books.version = "3.00";
books.version;
books.getRandomNumber();
