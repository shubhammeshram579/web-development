// api error heanler

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statct = ""
        
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (statct){
            this.stack = statct
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}