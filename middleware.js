import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const {auth}=NextAuth(authConfig)

export default auth((req)=>{
const {nextUrl}=req;
const isLoggedin=!!req.auth;
const isProtected =protectedRoutes.includes(nextUrl.pathname);
if(isLoggedin){
  if(nextUrl.pathname=="/login" || nextUrl.pathname=="/resetpassword"){
        return Response.redirect(new URL("/",nextUrl))
  }
}

if(isProtected){
  if(!isLoggedin){
    return Response.redirect(new URL("/login",nextUrl))
  }
}
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };

const protectedRoutes=["/"]