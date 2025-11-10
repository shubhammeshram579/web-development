let useritem = document.querySelector(".userselect")
let dropdownutem = document.querySelector(".dropdownlist")


useritem.addEventListener("mouseenter", () => {
    dropdownutem.style.opacity = "1"
})


useritem.addEventListener("mouseleave", () => {
    dropdownutem.style.opacity = "0"
})



let useritem2 = document.querySelector(".fa-ellipsis-vertical")
let dropdownutem2 = document.querySelector(".dropdownlist2")


useritem2.addEventListener("mouseenter", () => {
    dropdownutem2.style.opacity = "1"
})


useritem2.addEventListener("mouseleave", () => {
    dropdownutem2.style.opacity = "0"
})