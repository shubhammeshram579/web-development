import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    console.log(path)

    const isPublicPath = path  === "/login" || path === "/singin" || path === "/verifyemail"

    const token = request.cookies.get("token")?.value

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/singin",
    "/verifyemail",
    "/profile",
    "/profile/:id",
  ]
}