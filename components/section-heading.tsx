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
    <div className='relative group'>
      <motion.h2 variants={headingAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.175, duration: 0.6}} viewport={{once: true}} className='text-4xl font-semibold mb-8 text-center'>{children}</motion.h2>
      {/* <span className='absolute h-3 w-full bottom-2 bg-purple-700 -z-10 opacity-20 -rotate-1 group-hover:h-5/6 transition-all'></span> */}
    </div>
    
  )
}
