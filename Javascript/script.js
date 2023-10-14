// let nameshteBtn = document.querySelector('button');
// nameshteBtn.addEventListener('click',showMsg);


// function showMsg(){
//     alert("nameste world")
// }

let nameshteBtn = document.querySelector('button');
nameshteBtn.addEventListener('click',inputMsg);


function inputMsg(){
    let name = prompt("Enter name of the student");
    nameshteBtn.textContent = 'Roll no. 1 :'  + name;
}