'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const Box = () => {
  const boxRef = useRef(null)

  // Array to hold video references
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // List of videos from the public folder
  const videoFiles = [
    'beach.mp4',
    'cake.mp4',
    'dog.mp4',
    'horses.mp4',
    'insideTheCar.mp4',
    'partyVideo.mp4',
    'rain.mp4',
    'swimmingPool.mp4',
    'walkingWithDog.mp4'
  ]

  // Play video on hover
  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play()
    }
  }

  // Pause video when the mouse leaves
  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause()
    }
  }

  return (
    <div
      className='overflow-x-hidden w-[85%] md:w-[60%] m-auto rounded-md'
      ref={boxRef}
    >
      <motion.div
        className='h-[300px] p-2 inline-flex gap-3 cursor-grab'
        drag='x'
        dragConstraints={boxRef}
      >
        {
          videoFiles.map((video, i) => (
            <div
              key={i}
              className='relative min-w-[233px] h-[452px] rounded-md overflow-hidden'
              onMouseEnter={() => handleMouseEnter(i)} // Play video on hover
              onMouseLeave={() => handleMouseLeave(i)} // Pause video when mouse leaves
            >
              {/* Video as background from the public folder */}
              <video
                ref={(el) => { videoRefs.current[i] = el }} // Store video reference
                className='absolute top-0 left-0 w-full h-full object-cover'
                src={`/${video}`} // Reference video from public folder
                loop
                muted
              />
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}
