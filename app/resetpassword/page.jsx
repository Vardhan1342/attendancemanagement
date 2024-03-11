"use client"
import React, { useState } from 'react';

import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoginButton } from '../login/page';
import { resetPassword } from '@/actions/login';


 const Page = () => {
  const [error,setError]=useState("");
 const router=useRouter();
 
  return (

    <div className='border-2 rounded-md border-gray-200 bg-white mx-auto max-w-md shadow-sm mt-10 pb-10'>
    <h1 className='text-center text-4xl text-orange-700/90 font-extrabold mt-10'> Reset Password </h1>
   
   
    <form action={(formData)=>{
      resetPassword(formData)
      .then((res)=>{
        setError(res?.error)
        setTimeout(() => {
          setError("");
      }, 5000);
      if(!res){
        router.push("/login")
      }
      })}}  
    className="space-y-3">
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
              // onChange={(e)=>{handlechange(e)}}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            New Password
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
              // onChange={(e)=>{handlechange(e)}}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="Confirm_password"
              placeholder="Enter password"
              required
              minLength={6}
              // onChange={(e)=>{handlechange(e)}}
            />
          </div>
        </div>
        <Link href="/login" className='text-xs text-blue-700 underline '>Login?</Link>
      </div>
      <LoginButton />
      <div
        className="flex h-8 items-end space-x-1"
       
      >
        {error && (
          <>
            <div className="h-5 w-5 text-red-500" ></div>
            <p className="text-sm text-red-500">{error}</p>
          </>
        )}
      </div>
    </div>
  </form>
  </div>

  );
}

export default Page;