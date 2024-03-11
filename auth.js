import NextAuth from 'next-auth';
import { authConfig, getUser } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { Admin } from './models/Admin';
import { connectToDB } from './db/connectToDb';
 



export const { handlers:{GET,POST},auth, signIn, signOut } = NextAuth({

    secret:process.env.AUTH_SECRET,
    session:{strategy:"jwt"},
    callbacks:{
           async session({token,session}){
                 session.user.id=token.id;
                 session.user.role=token.role
                 return session
           },
           async jwt({token}){
            const user=await getUser(token.email);
            token.id=user._id;
            token.role=user.role
            return token;
           }
    },
    ...authConfig,

})