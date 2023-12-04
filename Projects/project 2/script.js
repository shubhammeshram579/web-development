gsap.to("#nav",{
    backroundColor : "#000",
    height: "120px",
    duration:0.5,
    scrollTrigger:{
        triggr: "#nav",
        scroller: "body",
        markers : true,
        start : "top -10%",
        end: "top -11%",
        scrub:1
    }
})



gsap.to("#main",{
    color: "red"
})
