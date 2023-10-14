
// part 2 object deduction
// const Course_10 = new Function('title',
// `this.title = title,
// this.enroll = function (){
//     console.log('you are succesfully enrolled');
// }
// `)

// const course_11 = new Course_10('javascript');
// course_11.enroll();



//1 prmitive datatypes
// let number = 10;
// // pass by value
// let number_2 = number;
// number = 15;

// console.log(number);
// console.log(number_2);

// // 2 refererance datatypes
// let ojt = {number : 10};
// let obj2 = ojt;

// ojt.number = 15;

// console.log(ojt);
// console.log(obj2);


// clone object

const Course_20 = {
    title: 'javascript',
    enroll(){
        console.log('you are succesfully enrolled');
    }
}

// first option for object clone
// const course_21 = { ...Course_20 }
// course_21.title = 'C++';

// console.log(course_21);


// second option for clone object
// const course_23 = Object.assign({},Course_20)
// course_23.title = "python";
// console.log(course_23);



// for(let key in Course_20){
//     console.log(key,Course_20[key]);
// }


// for(let key of Object.keys(Course_20)){
//     console.log(key,Course_20[key]);
// }



// story for key data 

const couser_final = {};
for(let key of Object.keys(Course_20)){
    couser_final[key] = Course_20[key];
}


console.log(couser_final);