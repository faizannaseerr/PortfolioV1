import React from 'react'
import {motion} from 'framer-motion'

const headingAnimationVariants = {
  initial: {opacity: 0, y: 0},
  animate: {opacity: 1, y: 0},
}

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <div className='relative group text-center flex flex-row items-baseline justify-center'>
      {/* <span className='bg-gray-700 w-32 mx-8 h-0.5'></span> */}
      <motion.h2 variants={headingAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.175, duration: 0.6}} viewport={{once: true}} className='md:text-3xl text-2xl font-semibold mb-8 block'>{children}</motion.h2>
      {/* <span className='bg-gray-700 w-32 mx-8 h-0.5'></span> */}
    </div>
    
  )
}
