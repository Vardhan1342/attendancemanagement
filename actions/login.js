"use server";

import { signIn } from "@/auth";
import { connectToDB } from "@/db/connectToDb";
import { Admin } from "@/models/Admin";

export const login=async(formData)=>{
        console.log(formData);
        try{     
                console.log("before");
                const result = await signIn("credentials", {
                        email: formData.email,
                        password: formData.password,
                        redirectTo:"/",
                      });
                  
                    console.log(result)
        }
        catch(error){
                console.log(error);
        }
              
}