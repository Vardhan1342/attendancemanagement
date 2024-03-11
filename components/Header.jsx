import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { auth, signOut } from '@/auth';


const tabs=[
    {
        name:"Users",
        href:"/users"
    },
    {
        name:"Manage Users",
        href:"/users"
    },
    {
        name:"Users Log",
        href:"/users"
    },
    {
        name:"Devices",
        href:"/device"
    },
]

const Header = async() => {
    const sessions=await auth();
    console.log(sessions.user);
  return (
    <div className='bg-white flex h-20 p-4 md:p-8 justify-between items-center'>
        <div className='flex items-end md:w-1/2 md:justify-between'>
                <div className=''>
                    <Image 
                    src="/logo.webp"
                    alt=""
                    width={200}
                    height={100}
                    />
                </div>
                <div className='flex gap-x-4 relative  left-6  md:gap-x-8'>
                    {tabs.map((tab)=>(
                        <Link 
                        href={tab.href} 
                        key={tab.name}
                        className='text-red-600 font-semibold group relative cursor-pointer'
                        >
                            {tab.name}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C02633] transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                        </Link>
                    ))}            
                </div>
        </div>
        <form
          action={async () => {
            'use server';
            try{

                await signOut();
            }
            catch(error){
                    throw error;
            }
          }}
        >
        <Button
        variant="custom"
        className="md:mr-20"
        >
            Logout
        </Button>
        </form>
    </div>
  );
}

export default Header;
