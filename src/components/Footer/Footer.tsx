'use client'
import React from 'react';
import { usePathname } from "next/navigation";


const Footer = () => {
  const pathname = usePathname();
  
  if (pathname.startsWith('/studio')) {
    return null; 
  }

  return (
    <div className='h-auto w-full  bg-[#313331] p-6'>
        <div className='flex w-full justify-center items-center h-100%'>
          <h6 className='text-background'>Footer</h6>
        </div>
    </div>
  )
}

export default Footer
