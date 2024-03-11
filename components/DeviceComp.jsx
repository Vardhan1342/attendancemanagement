"use client"

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { createDevice, deleteDevice, editDevice, getDevices } from '@/actions/Device';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



const DeviceComp = () => {

 const [devices,setDevices] = useState();

 const handleDelete=(id)=>{
        deleteDevice(id).then((res)=>{
          if(res.success){
            alert(res.success)
          }
          else{
            alert(res.error)
          }
        })
 }
 const handleEdit=()=>{

 }
  


 const allDevices=()=>{
       getDevices().then((res)=>{
        console.log(res);
        setDevices(res);
       })
      }
 useEffect(()=>{
   allDevices();
 },[]) 

  return (
    <div className='md:mx-10'>
      <Dialog>
          <div className='flex justify-between'>
            <span>{"    " }</span>
            <DialogTrigger asChild>
                  <Button variant="custom" className="mr-10 md:mr-16">+ Create</Button>
           </DialogTrigger>
          </div>
              <DailogCont
              title="Create"
              action={createDevice}
              />
      </Dialog>
      <Table>
      <TableCaption>Devices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Device Name</TableHead>
          <TableHead>Device Department</TableHead>
          <TableHead>Device id</TableHead>
          <TableHead className="text-right">Created on</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {devices&& devices.map((device)=>(<>
            <TableRow>
              <TableCell className="font-medium">{device.DeviceName}</TableCell>
              <TableCell>{device.DeviceDepartment}</TableCell>
              <TableCell>{device.DeviceId}</TableCell>
              <TableCell className="text-right">{device.DeviceDate.toString().slice(0,10)}</TableCell>
              <TableCell className="">
                <Button 
                variant="custom" 
                size="sm" 
                className="text-xs w-10 h-6" 
                onClick={()=>{
                  handleDelete(device.id)
                  }} >
                    Delete
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                  <Button 
                    variant="custom" 
                    size="sm"
                    className="text-xs w-10 h-6 mx-1" 
                    onClick={()=>{
                      handleEdit(device.id)
                      }}>
                        Edit
                   </Button>
                  </DialogTrigger>
                  <DailogCont 
                  title="Edit"
                  action={editDevice}
                  id={device.id}
                  devicename={device.DeviceName}
                  deviceid={device.DeviceId}
                  Department={device.DeviceDepartment}
                  />
                </Dialog>
              </TableCell>
            </TableRow>
          </>
          )  
          )}
       
      </TableBody>
    </Table>

    </div>
  );
}

export default DeviceComp;






export const DailogCont=({title,action,id,deviceid,devicename,Department})=>{
  return (
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form action={(formData)=>action(formData).then((res)=>{
          if(res.success){
            alert(res.success)
          }else{
            alert(res.error)
          }
        })}>

        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="deviceid" className="text-right">
              Device Id
            </label>
            {title=="Edit" ?
              <input id="deviceid" value={deviceid} placeholder='eg:12345' name="id" className="col-span-3" /> 
              : 
              <input id="deviceid" placeholder='eg:12345' name="id" className="col-span-3" />
            }
            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Device Name
            </label>
           {title=="Edit" ? 
           <input id="name" placeholder='Eg:RFID1234' value={devicename} name="name"  className="col-span-3" />
           :
           <input id="name" placeholder='Eg:RFID1234' name="name"  className="col-span-3" />
           
           }

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Device Department
            </label>
            {title="Edit" ?
            <input id="username" defaultValue={Department} name="department" placeholder='eg:cse'  className="col-span-3" />

            :
            <input id="username" name="department" placeholder='eg:cse'  className="col-span-3" />

            }
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit"> {title=="Create" ? "Create":"Save changes" } </Button>
        </DialogFooter>
        </form>
  </DialogContent>
  )
}