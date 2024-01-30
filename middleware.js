import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const {auth}=NextAuth(authConfig)

export default auth((req)=>{
const {nextUrl}=req;
console.log(nextUrl.pathname)
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };