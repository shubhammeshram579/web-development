import { NextRequest } from "next/server";
import jtw from "jsonwebtoken"


export const getDataFromToken = (request:NextRequest) => {
    try {
        const Token =  request.cookies.get("token")?.value || ""

        const decodedToken:any = jtw.verify(Token, process.env.TOKEN_SECRET!)

        return decodedToken.id
        
    } catch (error:any) {
        throw new Error(error.message)
        
    }
}