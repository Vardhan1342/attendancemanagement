const { Schema, models, model } = require("mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:[true,"email is required"]
    },
    CardID:{
        type:String,
        required:[true,"password is required"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    
    TimeIn:{
        type:Date
    },
    TimeOut:{
        type:Date
    }
},{
    timestamps:true
})

export const Users=models?.Users || model("Users",userSchema);