// rafper first way  promise formate
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))

    }

}


export default asyncHandler




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
