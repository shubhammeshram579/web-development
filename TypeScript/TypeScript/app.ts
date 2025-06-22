//1. what is typeScript?
// typeScript is node.js comfiler to set dtype for handling the large dtype of error 
// in javascript is disind the data type as per value you set like number str etc...
// but type is give the facility to set dtype as a varible dtype is only work

// example

// in js
let a = 20;


// in typeScript
let b: string;
// Type 'number' is not assignable to type 'string'.ts(2322)
// let b: string
// b = 20

b = "shubham"

// you try update str to number also given error
// Type 'number' is not assignable to type 'string'.ts(2322)
// let b: string
// b = 50

b = "labham"


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
    name:"shubham",
    age:27
}

let ary = [12,44,55];

function ab(){
    let a = 20;
    let b = 30;
    return a + b
}

ab()




// 2. Array 

// in js
let array = [12,44,55,6,{name:"s",age:23}];


// in tsc
// i disied array2 type is number then it is only set the value number other wise giving error
//Type 'string' is not assignable to type 'number'
// let array2 : number[] = [23,44,55,"shubham"]

let array2 : number[] = [23,44,55];


// 3. tuples
// tuples means set multiple dtype 

let arrayT : [number,string] = [123,"shubham"];

// if i pass array value like that it given type error
// Type 'string' is not assignable to type 'number'.
// let arrayT2 : [number,string] = ["labham",123];


// 4. Enums

// example1
enum Username {
    admin = "admin",
    guest = "guest",
}

Username.admin


// example 2

enum StatusCode {
    SUCCECS = "200 ok",
    ERROR = "400 somthing get error"
}


StatusCode.SUCCECS;


// 5. Any , Unknown ,Void , null, undfined, never


// i. Any

// any is like js concept it set a dtype as per the value
// let Any1: any
let Any1;
Any1 = 20;
Any1 = "shubham";

// but i set dtype like number ,str

let Any2 : string;

// Any2 = 120 //Type 'number' is not assignable to type 'string'

Any2 = "Labham";



// ii. Unknown

// Unknown is similer to any but is diffence becosue it given the check dtype then updated value

let U1;
U1 = 10;


// accese to number functions
U1.toExponential()

U1 = "shubham"
// Property 'toExponential' does not exist on type 'string'
// U1.toExponential()

// set condition then accese the function
if(typeof U1 === "string"){
    U1.toLocaleUpperCase()
}


// iii. void

function abc():void {
    console.log("shubham")
}
abc();

function abcs(): number {
    return 12
}

function abcs2(): string {
    return "shubham"
}


// iv. null 
// let isNul:null;
let isNul:null | string; // it call union in js or
isNul = "shubham"


// v. undifind
let Isun = undefined


// vi. never for used pred while loop or for loops



// part 2 typescript

// 1. Type infrence
    // i. Understanging type infrence
    // ii. Type Annotation.


// 1. Type infrence
//  means automaticaly check data and defind data type it call type infrence

let Ia = 12 ;  /// number
let ia1 = "12"; /// dtype is sting

// 2. type annotation
//means set the varuble of data store datatype like sting , number boolean etc..
// it call type annotation

let a1:number;

a1 = 8833;

let a2: string | number | boolean;

a2 = "shubham";
a2 = 24555;
a2 = true;

// Type '12345n' is not assignable to type 'string | number | boolean'
// a2 = 12345n; but i set bigite number then given error

// example2 

let a3: boolean;

function NameoFage(a3:string, b: number):void{
    a3 = "his age is:";
    b = 25;
    console.log(`${a3} ${b}`)
}



// part 3

// 1. Interfaces and Type aliases
    // i. Defining interfaces
    // ii. extending interfaces
    // iii. type aliases
    // iv. Intersection Types


// i.Defining Interfaces

interface User {
    name:string,
    age:number,
    gender?: string; // ? mease oficial set data male or female if not mention then used ? 
}

function abcd(obj: User){
    console.log(`user name is ${obj.name} and age ${obj.age} gender is ${obj.gender}`)
}

abcd({name:"shubham",age:27,gender:"male"})

// if i pass new varible then givin error becouse interface address not exited
// abcd({name:"shubham",age:27,gender:"male",address:"gondia"})
// Object literal may only specify known properties, and 'address' does not exist in type 'User'


// ii. extending interfaces

// first interface for father info
interface father {
    firstname:string,
    lastName:string,
    address?:string,
    pinCode?:number
}

// marge to father info with son
interface son extends father {
    gender:string
}


// both info used father and son it's call exted the interface
function FAndSon(obj:son) {
    console.log(`user is ${obj.firstname} ${obj.lastName} gender is ${obj.gender}`)
}


FAndSon({firstname:"shubham",lastName:"meshram",gender:"male"});


// 3. Type Aliases
// means create varible and  accept the paticaluer selected dtype to store values

// example1
type pen  = number;

let pendData: pen;

pendData = 1234;

// if i pass difence dtype value then given eror
// Type 'string' is not assignable to type 'number'.
// pendData = "shubham"

// example2

type pen2 = string | number | boolean;

let pendata2: pen2;

pendata2 = 12,"shubham",true // it is accept
// pendata2 = 12,"shubham",true, 2233n // bigigit dtype not set it is given error


// in function
function pendFun(obj:pen2) {

    console.log(obj)
}

// testing in browger pendData(13)



// v. intersection types

type user = {
    name:string,
    email:string
}


type admin = user & {
    getDetails(user:string):void
}

function FInterType(obj:admin){
    console.log(obj.name)
    console.log(obj.email)
    obj.getDetails("labham")

}

FInterType({name:"shubham", email:"shubham321@gmail.com",getDetails: (user:String) => {
    console.log(`details for ${user}`)
}})


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
    name = "satweek hights";
    floor = 4;
    left =  true;

}

let b1 = new Building()
let b2 = new Building()


// 2. Contructors
// contructors function means it creating same type data then used multiple same function used it call controctors function

// basic of custuctor example 1
class ElectonicItem {
    constructor(public name:string, public brand:string,price:number){
        console.log(`${name} and ${brand} and ${price}`)
    }
}

let mobile = new ElectonicItem("Moto","moto g",12000)
let laptop = new ElectonicItem("dell","insprin",54000)


// example 2 for defaul value set

class Fruits {
    constructor(public name:string, public price:number = 0){
        console.log(`${name} and ${price}`)
    }
}


let F1 = new Fruits("Apple") 


// example 3 sting defualt value 

class Channel {
    constructor(public name:string, public like:number, public Taimnuil:string = "tainail is not found" ){
        // also handel condition base if default taimnail is not work
        if(!Taimnuil){
            this.Taimnuil = "not availble"
        }

        console.log(`${name} and ${like} and ${Taimnuil}`)

    }
}

let C1 = new Channel("Youtube",1200)


// 3. Accsess modifire (public,privat,protected)

// public

class BagMaker {
    constructor(public brand:string,public size: number, public price:number){
        // first way to upaded value
        this.brand = brand;

    }

    // second way to change and update value
    Changing() {
        this.brand = "American bag"
    }
}

let bag1 = new BagMaker("skybag",22,1200)

// third way to change and updated value
bag1.brand = "newSkyfs"


// ii. Private

// private also change value under the contructors anywhere

class TrolyBagMaker {
    constructor(private brand:string, public qty:number,public price:number) {
        this.brand = brand

    }

    Changing() {
        this.brand = "skyBang"
    }

}


const Abag1 = new TrolyBagMaker("ammerican trost",2,1200) 

// if i try to updated out site then get error
// Property 'brand' is private and only accessible within class 'TrolyBagMaker'
// Abag1.brand

// if i change using under the contructoon function with hlep of methond then it is updated 
Abag1.Changing()

// check on browger then i get updated value 
// TrolyBagMaker {brand: 'skyBang', qty: 2, price: 1200}


// iii public extend and used private then face the issiues

// example1
class CurryBagMaker {
    constructor(public type:string) { // if i change public to privete then i get 
                                     // Property 'type' is private and only accessible within class 'CurryBagMaker'.

    }
}

class PlasticBagMaker extends CurryBagMaker {
    constructor(type:string) {
        super(type)
    }

    getValue() {
        console.log(this.type) // Property 'type' is private and only accessible within class 'CurryBagMaker'.
    }
}


const CB1 = new PlasticBagMaker("plasticBag")


// example2
class CurryBagMaker2 {
    private type2:string = "nonPlastic"
    constructor(public type:string) { 

    }
}

class PlasticBagMaker2 extends CurryBagMaker2 {
    constructor(type:string) {
        super(type)
    }

    getValue() {
        // console.log(this.type, this.type2) // Property 'type2' is private and only accessible within class 'CurryBagMaker2'
        console.log(this.type,)
    }
}


const CB2 = new PlasticBagMaker("non_plasticBag")


// iv. protected
// means  if we are used private then get error
// how to solve the not giving the error then we are used protected 
// it working both if you used public or private then not get ant dtype error 


class AirBagMaker {
    // if you want to used like private and public then used protected
    constructor(protected type:string){

    }
}

class newBagMaker extends AirBagMaker{
    constructor(type:string) {
        super(type)

    }
}


const NB1 = new newBagMaker("AirBag")

// v.  readonly  properties

// readonly  it help to do not updated to permisstion to updated new value


class ReadOnlyUser {
    constructor(public readonly username:string){
        console.log(`username is: ${username}`)
    }

    getChangeUser() {
        // this.username = "pallavi" //Cannot assign to 'username' because it is a read-only property.
    }
}

const AuthAuser = new ReadOnlyUser("aachal")
AuthAuser.getChangeUser()


// vi getter and setter

// example1
class GSUser {
    constructor(public name:string ,public age: number) {
        console.log(`username: ${name} and age ${age}`)
    }

    getter() {
        return this.name
    }

    setter(value: string) {
        this.name = value
    }
}


let GS1 = new GSUser("shubham",27)

GS1.getter()
GS1.setter("labham")
// out: GSUser {name: 'labham', age: 27}



// example2

class GSUser2 {
    constructor(public _name:string ,public age: number) {
        console.log(`username: ${name} and age ${age}`)
    }

    get getter() {
        return this._name
    }

    set setter(value: string) {
        this._name = value
    }
}


let GS12 = new GSUser("aachal",23)

GS12.getter()
// out: GSUser {name: 'aachal', age: 23}

GS12.setter("pallavi")
// out GSUser {name: 'pallavi', age: 23}



// vii. static members

// stitic is given the fucntionlity to withoud defind
// varible of class used and run as per the your class contruction function.

// example1 for class used create varible then access value 
class StackText {
    version = "2.00"
}

const St1 = new StackText()

St1.version


// whithoud defins varible used 

class books {
    static version = "3.00"

    static  getRandomNumber() {
        return Math.random()
    }
}

books.version
books.getRandomNumber();


// part 4

// functions
    // function types
    // optional and defualt parameters
    // rest parameters
    // overload


// basic function declatation js

function basicF() {
    console.log("my name is basic fucntion")
}
basicF();


const basicF2 = () => {
    console.log("my name is arrow function")
}

basicF2();


// function type in typescript

function basicFT(name:string, age:number) {

    console.log(`name is ${name} and age ${age}`)
}

basicFT("shubham",26);


function basicFT2(v:any):void {
    return v
}

console.log(basicFT2("shubham"))

function basicFT3(v:string):string {
    return v
}

console.log(basicFT3("labham"))


function basicFT4(name:string, age:number,mouse:(any:string) => void) {
    console.log("gondia")
}

basicFT4("labham",27,(org:string) => {
    console.log(org)
})

// parameters

function paramaters(a:string,b:string,c:number){
    console.log(`${a} ${b} ${c}`)
}

paramaters("shubham","meshram",27);


//rest parameter also saud argment
function restP(a:string,b:string,...c:number[]){
    console.log(`${a} ${b} ${c}`)
}

restP("shubham","meshram",12,444,55);


// spreat oprater

let SpTest = [12,33,55,77];

const newSpreat = [...SpTest]

console.log(newSpreat);


// overLoading function

// function O1T(a:string):void{
    
// }
// function O2T(a:string, b:number):number;


function overloading(a:any,b:any) {

    if(typeof a === "string" && typeof b === undefined){
        console.log("shubham")
    }

     if(typeof a === "string" && typeof b === "number"){
        return 1234
    }else{
       throw new Error("error");
       
    }
}

// overloading("shubham",undefined)
// overloading("shubham",1234)


// part 5
// Generics 
    // generics function
    // generics iterface
    // genrac classes

// example1
function GericF<T>(a:T) {
    console.log(a)
}

GericF<String>("shubham")
GericF<number>(12)

// example2
function GericF2<H> (a:H,b:string,c:number) {
    console.log(`${a} and ${b} and ${c}`)

}


GericF2<string>("shubham","meshram",27);


// genric interface

interface GenricInterface<H> {
    firstName:string,
    lastName:string,
    age:H
}

function geric3(obj:GenricInterface<number>) {
    console.log(`${obj.firstName} ${obj.lastName} ${obj.age} `)

}

geric3({firstName:"shubham",lastName:"meshram",age:27})



// gernric classes

class mouseMeker<T> {
    constructor(public name:T){
        console.log(name)

    }
}

let M1 = new mouseMeker<string>("dell");
let M2 = new mouseMeker<number>(20);



// advance level genric

function GenricA<T>(a:T,b:T):T {
    return <T> "Shubham"

}

console.log(GenricA<string>("shubham","meshram"))


// function GenricA2<T>(a:T,b:T):T {
//     if(typeof a === "string"){
//         return <T> "h"
//     }

// }

// GenricA2<string>("shubham","meshram")























