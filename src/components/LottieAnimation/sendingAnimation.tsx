'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/lottie/sendingAnimation.json';

const LottieAnimationSending: React.FC = () => {
  return (
    <div className='w-[200px] h-[200px]'>
        <Lottie animationData={animationData} loop={true} />
    </div>
 
  )
};

export default LottieAnimationSending;
