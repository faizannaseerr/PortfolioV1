"use client"

import React from 'react'
import {motion} from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className='flex flex-row'>
      {/* <motion.div className='bg-gray-200 mt-32 mb-32 h-1 w-[45rem] rounded-full hidden sm:block' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.125}}></motion.div> */}
      <motion.div className='bg-gray-200 my-16 h-16 w-1 rounded-full hidden sm:block mx-5' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}></motion.div>
      {/* <motion.div className='bg-gray-200 mt-32 mb-32 h-1 w-[45rem] rounded-full hidden sm:block' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.125}}></motion.div> */}
    </div>
    
  )
}
