import { model } from "mongoose"
import { Schema, models } from "mongoose"

const deviceSchema=new Schema({
    DeviceName:{
        type:String,
        required:[true,"Device Name is required"],
        unique:true
    },
    DeviceDepartment:{
        type:String,
        required:[true,"Device Department is required"],
       
    },
    DeviceId:{
        type:String,
        required:[true,"Device ID is required"],
        unique:true
    },
    DeviceDate:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

export const Device=models?.Device || model("Device",deviceSchema)
