"use client"
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


 const Page = () => {
  

  return (

    <div className='border-2 border-gray-100/50 mx-auto max-w-md shadow-sm mt-10 pb-10'>
      <h1 className='text-center text-4xl text-orange-700/90 font-extrabold mt-10'> Reset Password </h1>
      <form
      className='flex flex-col max-w-xs  mx-auto  justify-center items-center space-y-6 mt-10'>
       
        <Input
        type="password" 
        name="newPassword"
        placeholder='New Password' 
        className=''    
         />
        
        <Input
        type="password" 
        name="confirmPassword"
        placeholder='Confirm Password' 
        className='' 
        minLength={8} />
         
            <div className='-ml-[18rem]'>
              <Link className="underline text-blue-900 text-sm ml-0" href="/register">
               login
              </Link>
            </div>
  


            <Button
            variant="custom"
             className={`w-full`}   
            > Reset  </Button>
      </form>
    </div>

  );
}

export default Page;