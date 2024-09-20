'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/lottie/noDataFound.json';

const LottieAnimation: React.FC = () => {
  return (
    <div className='w-[170px] h-[170px]'>
        <Lottie animationData={animationData} loop={true} />
    </div>
 
  )
};

export default LottieAnimation;
