console.log("interview level conditional statement")


// 1. what is conditional statement?

// condtional stamtent is set the condition for object and number base true or false


// example 1

let objColor = "gray";

if(objColor === "red"){
    console.log("this object is color", objColor)
}else{
    console.log("this object is color not", objColor)
};



// multiple condtional statement
let objColor2 = "orage"

if(objColor === "yellow" && objColor2 === "green"){
    console.log(`both color is match ${objColor} and ${objColor2}`)
}else{
    console.log("both color is not match")
}



// get odd and even

let num = 11;

if(num % 2 === 0){
    console.log("even",num)
}else{
    console.log("odd",num)
}

// tetery oprater
console.log(num % 2 === 0 ? "even": "odd");