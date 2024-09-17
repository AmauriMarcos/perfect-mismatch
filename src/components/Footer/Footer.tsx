'use client'
import React from 'react';
import { usePathname } from "next/navigation";


const Footer = () => {
  const pathname = usePathname();
  
  if (pathname.startsWith('/studio')) {
    return null; 
  }

  return (
    <div className='min-h-[293px] w-full px-[6%] bg-[#313331]'>
        <div>
          Footer 1
        </div>
        <div>
          Content
        </div>
        <div>
          Bottom
        </div>
    </div>
  )
}

export default Footer
