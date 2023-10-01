"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {experiencesData} from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import ExperienceSection from './experience-section'
import {motion} from 'framer-motion'

// later - show two, while others close a lil bit (only show company & date)
// different underline colors for heading, icon and onclick function for experience tabs
// like the projects section, create delayed animation

const experienceAnimationVariants = {
  initial: {opacity: 0, y: 100},
  animate: {opacity: 1, y: 0},
}

export default function ExperienceOne() {
  const {ref} = useSectionInView('Experience')

  return (
    <motion.section ref={ref} id='experience' variants={experienceAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.175, duration: 0.6}} viewport={{once: true}} className='scroll-mt-28 mb-28 w-[55rem] md:w-[45rem] sm:mb-40 items-center justify-center'>
      <SectionHeading>Experience</SectionHeading>
      <div className='grid grid-cols-2 gap-4 items-center justify-center md:grid-cols-1'>
        {
          experiencesData.map((experience, index) => (
            <React.Fragment key={index}>
              <ExperienceSection {...experience}/>
            </React.Fragment>
          ))
        }
        {/* <div className='text-center'>1</div>
        <div className='text-center'>2</div>
        <div className='text-center'>3</div>
        <div className='text-center'>4</div> */}
      </div>
    </motion.section>
  )
}