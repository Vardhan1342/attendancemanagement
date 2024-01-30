import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { Admin } from './models/Admin';
import { connectToDB } from './db/connectToDb';
const getUser=async(email,password)=>{
    try{
        connectToDB();
        const user =await Admin.findOne({email});
        if(user)
        return user;
	    else
		 throw new Error("user not exists") 
    }
    catch(error){
            throw "user not exits"
    }
      
}
export const authConfig = {
  pages: {
    signIn: '/login',
	error: '/error'
  },
  providers: [
    Credentials({
        name:"credentials",
        async authorize(credentials) {
            try{
                const {email,password}=credentials;
                console.log("Recieved credinatials")
				try{

					let userx=await getUser(email,password);
					const user=userx.toJSON();
					if(user){
						console.log(user)
						return user;
					}
					else{
						return null;
					}
				}
				catch(error){
                         return error 
				}
				
                
                  
            }
            catch(error){
                console.error("Error during authorization:", error);
                return null;
            }
            
        },
      }),
],
} ;