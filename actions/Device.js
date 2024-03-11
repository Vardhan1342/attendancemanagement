"use server"

import { Device } from "@/models/Device"
import { revalidatePath } from "next/cache";

export const getDevices = async() =>{
    console.log("called")
    const devices=await Device.find({});
    const plainObjects = devices.map(item => {
        const { _id, ...rest } = item.toObject();
        return { id: _id.toString(), ...rest };
      });
      return plainObjects;
}


export const createDevice= async(formData) =>{
    console.log("creating device");
    const deviceName=formData.get("name");
    const deviceDepartment=formData.get("department");
    const id=formData.get("id");
   console.log(deviceName, deviceDepartment,id)
        try{
            const device = await Device.create({ 
                DeviceName: deviceName, 
                DeviceDepartment: deviceDepartment,
                DeviceId: id,
                DeviceDate: Date.now()
               })
             console.log("Created")
             if(device)  {
                return {success:"Created successfully"}
            } 

        }
        catch(error){
            return {error:"Couldn't create device"}
        }
     finally{
        revalidatePath("/devices")
     }
    
}


export const deleteDevice= async(id) =>{
    getDevice(id)
    const device=await Device.findByIdAndDelete({_id:id});
    revalidatePath("/devices")
    if(device)  {
        return {success:"Deleted successfully"}
    } 
    return {error:"Couldn't delete device"}
}


export const getDevice=async(id)=>{
    console.log("getting device",id)
     const device=await Device.findById({_id:id});
     return device;  
}


export const editDevice=async(formData)=>{
    console.log("edit device called")
    console.log(formData);
    const id=formData.get("id");
    const department=formData.get("department");
    
    try{
        const device=await Device.findOneAndUpdate({
            DeviceId: id,
            DeviceDepartment: department
        })
        return {success: "Changes made successfully"}
    }
    catch(error){
        return {error:"Couldn't edit device"}
    }
    finally{
        revalidatePath("/devices")
    }
}