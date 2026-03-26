console.log("hello js")



// bacic of js
// varible

var user = "subham"
let user2 = "labham"
const user3 = "aachal"

let arr = [1,2,3,4,5,6,7]
let page = 5;
let limit = 6;

function filterdata(arr , page, limit) {
    let newarr = []

    // arr.filter((i) => {
    //     if(i >= page && i <= limit){
    //         newarr.push(i)
    //     }
    // })

    // for(let i = 0; i <= arr.length; i++){
    //     if(arr[i] >= page && arr[i] <= limit){
    //         newarr.push(arr[i])
    //     }
    // }

    arr.forEach((i) => {
        if(i >= page && i <= limit){
            newarr.push(i)

        }
    })

    console.log(newarr)

}

filterdata(arr,page,limit)



// for(let i = 2; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }





// let nums = [1,2,3,4,5,6,7]
// let k = 3

// // let end = nums.slice(-3)
// // let start = nums.slice(0,4)

// // let marge = [...end,...start]

// // console.log(end)
// // console.log(start)
// // console.log(marge)

// const rotete = function(nums ,k){

//     let end = nums.slice(-k)
// let start = nums.slice(0,4)

// let marge = [...end,...start]

// return marge




// }

// console.log(rotete(nums,k))