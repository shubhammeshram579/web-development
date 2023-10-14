// // normal object apply first way 
// let leture = 10;
// let section = 3;
// let title = "javascript";


// const course = {
//     leture: 10,
//     section: 3,
//     title: "javascript",
//     notess: {
//         intruduction : "welcome to javascript course"
//     },
//     enroll() {
//         console.log("you are succefully enrolled");
//     }
// }

// course.enroll();
// console.log(course.leture);
// console.log(course.section);
// console.log(course)
// course.price = 1020;



// factory function

// by building fuction option 1

// function createCourse(){
//     const course = {
//         leture: 10,
//         section: 3,
//         title: "javascript",
//         notess: {
//             intruduction : "welcome to javascript course"
//         },
//         enroll() {
//             console.log("you are succefully enrolled");
//         }
//     }
//     return course;
// }

// const course  = createCourse();
// course.enroll()

// console.log(course);



// option 3 for apply
// function createCourse(){
//     return {
//         leture: 10,
//         section: 3,
//         title: "javascript",
//         notess: {
//             intruduction : "welcome to javascript course"
//         },
//         enroll() {
//             console.log("you are succefully enrolled");
//         }
//     }
    
// }

// const course  = createCourse();
// course.enroll()

// console.log(course);



// option 4 for easy to apply object fuction
// function createCourse(title){
//     return {
//         title: title,
        
//         enroll() {
//             console.log("you are succefully enrolled");
//         }
//     }
    
// }

// const course = createCourse("javascripts");

// course.enroll();
// console.log(course);



// costructer function not working i will check again

// function Course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log('your are succfuly enroll')
//     }
// };


// const course = new Course("Javascript");
// delete course.title;
// course.checkEnroll = function(){
//     console.log("30 user are enrooll");
// }
// course.enroll()
// console.log(Course);



// part 2 i learn 


const Course_1 = new Function('title',`
this.title = title,
this.enroll = Function (){
    console.log('You are succesfulyy enrolled');
}
`)

const course_5 = new Course_1('javascript');
course_5.enroll();