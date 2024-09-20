'use client'
import React, { useRef } from 'react'
import {motion} from 'framer-motion'
export const Box = () => {
    const boxRef = useRef(null)
  return (
    <div
        className='overflow-x-hidden w-[60%] m-auto rounded-md'
        ref={boxRef}
    >
        <motion.div
            className='h-[300px] p-2 inline-flex gap-3 cursor-grab '
            drag='x'
            dragConstraints={boxRef}
        >
            {
                Array.from({length: 10}).map((_, i) => (
                    <div
                        key={i}
                        className='min-w-[233px] h-[452px] bg-red-400 rounded-md'
                    />
                ))
            }
        </motion.div>
    </div>
  )
}