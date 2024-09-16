import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=' py-10 w-full'>
      <div className='leading-50 tracking-wider'>
        <span className='font-montserrat font-bold text-[3.5rem]'>Hey, Marija here!</span>
        <span className='font-montserrat font-normal text-[2rem] md:text-[3.5rem] ml-2'>Discover the family blog where we celebrate the chaos of family life</span>
      </div>
      <div className='flex w-[full] my-10 justify-around gap-8'>
        <div className='w-full h-full '>
          <Image className='object-cover h-[400px] w-full  '  height={400} width={400} src="https://images.pexels.com/photos/3496763/pexels-photo-3496763.jpeg?auto=compress&cs=tinysrgb&w=600" alt='Malta'/>
        </div>
        
        <div className='flex flex-col gap-4 px-4  justify-center'>
          <h2>The answeome trip together</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

          <button className='self-start'>Read more</button>
        </div>
      </div> 
    </div>
  )
}

export default Hero;
