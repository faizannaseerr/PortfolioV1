"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

// initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.175}}

const aboutAnimationVariants = {
  initial: {opacity: 0, y: 0},
  animate: {opacity: 1, y: 0},
}
// mb was 40 for sm:mb

export default function About() {
  const {ref} = useSectionInView('About')

  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-48' variants={aboutAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.175, duration: 0.6}} viewport={{once: true}} id="about">
      <SectionHeading> About Me </SectionHeading>
        <p className='mb-3'>The intersection of art and technology has always held a profound fascination for me, owing to its unique connections. As a computer science student specializing in software engineering, my primary goal has been to approach software development from a perspective that marries aesthetics and functionality seamlessly. I firmly believe that design plays an integral role in crafting a user experience that is not only coherent but also augments everyday usability.</p>
        <p className='mb-3'>In my projects, I strive for an aesthetic simplicity that does not compromise on the value they bring to the end user's daily life. More recently, I've ventured into the realm of incorporating AI into my creations to enhance user comfort. </p>
        <p> When I'm not immersed in coding, you'll likely find me engaged in various sports activities, whether it's holding a racket, bat, paddle, or ball. I have a passion for sports and am particularly enthralled by cricket.</p>  
        {/* Add nice picture here */}
    </motion.section>
  )
}
