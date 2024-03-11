"use server";

import { signIn } from "@/auth";
import { connectToDB } from "@/db/connectToDb";
import { Admin } from "@/models/Admin";

export const login=async(formData)=>{
        console.log(formData);
        try{     
                console.log("before");
              const res=  await signIn("credentials", {
                        email: formData.email,
                        password: formData.password,
                        redirectTo:"/"
                      });
                  console.log("result is ",res);
                   console.log();
        }
        catch(error){
               
                throw error;
        }
              
}

export const resetPassword=async(formData)=>{
       console.log(formData)
       const email=formData.get("email");
       const userByemail=await Admin.findOne({email})
       if(!userByemail){
        return {error:"User not exists"}
       }
       const password=formData.get("password");
       const confirmPassword=formData.get("Confirm_password");
       if(password!==confirmPassword){
          return {error:"passwords not match"}
       }
       try {
         const user=await Admin.findOneAndUpdate({email,password:password})
       } catch (error) {
              return {error:"user not found"}
       }
}
