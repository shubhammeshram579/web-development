//string same basic part 1

let string = "This is a stings";
console.log(string);


// dtypes check 
console.log(typeof string);


// badstring1 

// let badsting1 = this a sting;
// console.log(badsting1);

// let badstring2 = 'this is a sting;
// console.log(badstring2);


// let badstring3 = this is a sting';
// console.log(badstring2);


// let badstring4 = "this is a sting';
// console.log(badstring2);


// let badsting5 = 'you've have got bad sting format';
// console.log(badsting5)

// back slace mathdtod is working \
let badsting6 = 'you\'ve have got bad sting format';
console.log(badsting6)


//currect sting apply format "" & ''
let badsting7 = "youve have got bad sting format";
console.log(badsting7)

// concate string text

let hello = "Hello! ";
let world = "world wellcome to my website";

console.log(hello+ world);

//defind the varaible
let marge = hello + world;
console.log(marge);

// multole text aliment add
let multpletimeplus = hello + world + hello + " space " + world;
console.log(multpletimeplus);


// same operater apply + * 
let strtonumber = "shubham" + 123;
let strtonumber1 =  123 + "shubham"
let strtonumber2 = 123 + 234 + "shubham"

console.log(strtonumber);
console.log(strtonumber1);
console.log(strtonumber2);


//convert numbert to str or str to number
let strtonumber5 = "1234"
console.log(Number(strtonumber5));

// for number to str
let savestrtonumber = Number(strtonumber5);

let strnumber = savestrtonumber.toString();
console.log(strnumber);
console.log(typeof strnumber);

// format fuction use in javascript 
console.log(`${hello + world} this a format fuction print output ${hello}`);


// string fuction part 2


// length fuction count of text 
const str = "my name is shubham";
console.log(str.length);

var faveShow = "check the str text length"
console.log(faveShow.length);


//sling in str
console.log(faveShow[0]);
// console.log(faveShow[-1]);
console.log(faveShow[24]);
console.log(faveShow[faveShow.length-1]);

console.log(faveShow[12]);
// console.log(faveShow[:2]);

// find the text index position 
console.log(faveShow.indexOf("str"));

// sling in text
console.log(faveShow.slice(0,5));

// lower case and upper case text anliment change
var srk = "sharuk Khan is king of bollywood"

console.log(srk.toUpperCase());
console.log(srk.toLowerCase());
console.log(srk.toLocaleLowerCase());


// concat fuction in str
console.log(hello.concat(srk));













