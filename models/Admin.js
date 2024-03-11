const { Schema, models, model } = require("mongoose");

const adminschema=new Schema({
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"admin"
    }
},{
    timestamps:true
})
export const Admin=models?.Admin || model("Admin",adminschema);