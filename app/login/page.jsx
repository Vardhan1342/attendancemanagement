"use client"
import React, { useTransition } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


 const Page = () => {
  
  const [isPending,startTransistion]=useTransition();

  return (

    <div className='border-2 border-gray-100/50 mx-auto max-w-md shadow-sm mt-10 pb-10'>
      <h1 className='text-center text-4xl text-orange-700/90 font-extrabold mt-10'> Login </h1>
      <form
      className='flex flex-col max-w-xs  mx-auto  justify-center items-center space-y-6 mt-10'>
       
        <Input
        type="email" 
        name="email"
        placeholder='Enter your email' 
        className=''    
         />
        
        <Input
        type="password" 
        name="password"
        placeholder='password' 
        className='' 
        minLength={8} />
         
            <div>
              <Link className="underline text-blue-900 text-sm ml-0" href="/register">
                Forget Password ?
              </Link>
            </div>
  


            <Button
            type="submit"
            disable={isPending}
            variant={`${isPending? "secondary" :"custom"}`}
             className={`w-full`}   
            > Login  </Button>
      </form>
    </div>

  );
}

export default Page;