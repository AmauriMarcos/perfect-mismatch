'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/lottie/searchAnimation.json';

const LottieAnimation: React.FC = () => {
  return (
    <div className='w-[200px] h-[200px]'>
        <Lottie animationData={animationData} loop={true} />
    </div>
 
  )
};

export default LottieAnimation;
