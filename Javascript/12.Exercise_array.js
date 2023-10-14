const carectors = [
    {
        name:"Shubham Meshram",
        height : "172",
        mass : "77",
        eye_color: "brown",
        gender: "male"

    },
    {
        name:"Labham Meshram",
        height : "182",
        mass : "65",
        eye_color: "black",
        gender: "male"

    },
    {
        name:"Parmanad Meshram",
        height : "152",
        mass : "55",
        eye_color: "light_black",
        gender: "male"

    },
    {
        name:"Aachal Meshram",
        height : "157",
        mass : "64",
        eye_color: "blue",
        gender: "female"

    }
]


// 1. Get an array of all names

const names = carectors.map(ch => ch.name);
console.log(names);
console.log(carectors.map(el => el.height));
console.log(carectors.map(el => el.mass));


// 2. Get an Array of object with name and height properties
console.log(carectors.map(ch => {
    return { name: ch.name , height: ch.height}
}));


// 3. Get all total heights of all cractors
const carectors.reduce((prevHeight , Charactor)=>{
    return prevHeight + Number(carector.height);
},0))




