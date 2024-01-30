"use client"
import React, { useState, useTransition } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/actions/login';


 const Page = () => {
  
  const [isPending,startTransistion]=useTransition();
  const [info,setInfo]=useState({email:"",password:""});
  const [error,setError]=useState("")
  const handlechange=(e)=>{
    setInfo((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handlesubmit=()=>{
    login(info).then((res)=>{

      if(res=="Credintial invalid"){
                setError(res)
      }
    }
    ).catch(err=>{
      
    })
  }
  const [errorMessage, dispatch] = useFormState(handlesubmit, undefined);

  return (

    <div className='border-2 rounded-md border-gray-200 bg-white mx-auto max-w-md shadow-sm mt-10 pb-10'>
      <h1 className='text-center text-4xl text-orange-700/90 font-extrabold mt-10'> Login </h1>
     
     
      <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
       
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className=" block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={(e)=>{handlechange(e)}}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                onChange={(e)=>{handlechange(e)}}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
         
        >
          {error && (
            <>
              <div className="h-5 w-5 text-red-500" ></div>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
    </div>

  );
}

export default Page;





function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button variant="custom" className="mt-4 w-full" aria-disabled={pending}>
      Log in 
    </Button>
  );
}