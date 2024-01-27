import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { Admin } from './models/Admin';
import { connectToDB } from './db/connectToDb';
 

const getUser=async(email,password)=>{
    try{
        connectToDB();
        const user =await Admin.findOne({email});
        console.log(user)
        return user;
    }
    catch(error){
            console.log("user not found")
    }
      
}

export const { handlers:{GET,POST},auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        name:"credentials",
        async authorize(credentials) {
            try{
                const {email,password}=credentials;
                console.log("Recieved credinatials")
                // const user=await getUser(email,password);
                const user={email:"xyz@gmail.com",password:"123456789"}
                console.log("user is" ,user)
                return user; 
                  
            }
            catch(error){
                console.error("Error during authorization:", error);
                return null;
            }
            
        },
      }),
],
secret:process.env.AUTH_SECRET,
pages: {
    signIn: '/login', // Make sure this path is correct
  },


});