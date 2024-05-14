// rafper first way  promise formate
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))

    }

}


export {asyncHandler}




// second way rafper async awaits

// const asyncHandler =  (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             massage: err.message
//         })
        
//     }
    
// } 
