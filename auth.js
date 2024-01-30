import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { Admin } from './models/Admin';
import { connectToDB } from './db/connectToDb';
 



export const { handlers:{GET,POST},auth, signIn, signOut } = NextAuth({

    secret:process.env.AUTH_SECRET,
    session:{strategy:"jwt"},
    callbacks:{
           async jwt({token}){
            console.log("token is +++++++++++++++++")
            console.log(token)
            return token;
           }
    },
    ...authConfig,

})