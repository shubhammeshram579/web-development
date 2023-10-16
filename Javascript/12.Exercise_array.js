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
const totalHight =  carectors.reduce((prevHeight , Charactor)=>{
    return prevHeight + Number(Charactor.height);
},0);

// console.log(totalHight);


// get charactors with mass greter then 100
const greterThenMass = carectors.filter((character)=>{
    return character.mass > 55
});

// console.log(greterThenMass);



// get all male charectors
const maleCh = carectors.filter(character => character.gender == 'male');
console.log(maleCh);


// sort by name
const sortByname = carectors.sort((character1,character2) => {
    if (character1.name < character2.name){
        return -1;
    }
    if (character1.name > character2.name){
        return 1;
    }
    return 0
})


// console.log(sortByname);

// sort by gender

const sortByGender = carectors.sort((character1,character2) => {
    if (character1.gender < character2.gender){
        return -1;
    }
    if (character1.gender > character2.gender){
        return 1;
    }
    return 0
})

// console.log(sortByGender);



// does every characoter have mass more then 40

console.log(carectors.every((character) => character.mass > 40));



// does every character have blue eyes?
console.log(carectors.every((character)=> character.eye_color == "brown"))


// is there at least one male charactore?
console.log(carectors.some((character)=> character.gender));

// is there at least one greter then 200?
console.log(carectors.some((character)=> character.height > 100));