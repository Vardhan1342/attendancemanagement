import mongoose from "mongoose";

export const connectToDB=()=>{
     mongoose.connect(process.env.MONGODB_URL,{connectTimeoutMS: 30000})
    .then(()=>console.log("connected"))
    .catch(err=>{console.log(err)})

}