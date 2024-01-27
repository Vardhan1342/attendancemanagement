const { Schema, models, model } = require("mongoose");

const adminschema=new Schema({
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]

    }
})

export const Admin=models?.Admin || model("Admin",adminschema);