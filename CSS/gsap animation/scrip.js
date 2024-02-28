// to meant start to move 
// gsap.to(".card",{
//     x:300,
//     duration:2,
//     delay:1,
//     backgroundColor: "green",
//     rotate:360,
//     scale:0.5
// })

// from it help  recese move animation

gsap.from(".card",{
    x:300,
    duration:2,
    delay:1,
    backgroundColor: "green",
    rotate:360,
    scale:0.5

})


// some addtional propeties 
gsap.from("h1",{
    x:300,
    duration:2,
    delay:1,
    backgroundColor: "green",
    scale:0.5,
    stagger:1, //propty for move element one by one
    repeat:3, //for infinate used -1
    yoyo:true
})



// stap by stap animation effect move as per time set
// gsap.to("h2",{
//     x:300,
//     backgroundColor: "red",
//     duration:2,
//     delay:1
// })

// gsap.to("h3",{
//     x:300,
//     backgroundColor: "gray",
//     duration:2,
//     delay:3
// })


// gsap.to("h4",{
//     x:300,
//     backgroundColor: "yellow",
//     duration:2,
//     delay:5
// })


// same effect using timeline

var tl = gsap.timeline();

tl.to("h2",{
    x:300,
    backgroundColor: "yellow",
    duration:2,

})

tl.to("h3",{
    x:300,
    backgroundColor: "yellow",
    duration:2,

})


tl.to("h4",{
    x:300,
    backgroundColor: "yellow",
    duration:2,

})



