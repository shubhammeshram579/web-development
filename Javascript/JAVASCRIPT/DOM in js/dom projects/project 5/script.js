// // // var arr = [1,2,3,4,5];

// // // var newarr = ""
// // // arr.forEach(function(){
// // //     newarr += "hello"
// // // })

// // console.log(newarr)


var arrr = [
    {dp:"https://images.unsplash.com/photo-1681958758142-a671f311b596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    image:"https://images.unsplash.com/photo-1681958758142-a671f311b596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
  {dp:"https://images.unsplash.com/photo-1596815070908-b542a256e9fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    image:"https://images.unsplash.com/photo-1596815070908-b542a256e9fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
{dp:"https://plus.unsplash.com/premium_photo-1689607809314-84dedc85d311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
image:"https://plus.unsplash.com/premium_photo-1689607809314-84dedc85d311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
{dp:"https://images.unsplash.com/photo-1669553640769-0e4019b67d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
image:"https://images.unsplash.com/photo-1669553640769-0e4019b67d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
{dp:"https://images.unsplash.com/photo-1702905986326-6279e6636fcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
image:"https://images.unsplash.com/photo-1702905986326-6279e6636fcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},
]

var page2 = document.querySelector(".page2");
var cultters = ""


arrr.forEach(function(elem,idx){
    cultters += `<div class="story">
    <img  id="${idx}" src="${elem.dp}" alt="">
</div>`
    
});

// console.log(cultters);

page2.innerHTML = cultters;

page2.addEventListener("click",function(dets){

    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arrr[dets.target.id].image})`
    

    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none"

    },3000)

})



// console.log(arrr[dets.target.id].image)

