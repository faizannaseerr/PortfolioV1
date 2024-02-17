"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { frameworksData, languagesData, skillsData, softData, toolsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import {motion} from 'framer-motion'

const skillsHeadAnimationVariants = {
  initial: {opacity: 0},
  animate: {opacity: 1},
}

export default function SkillsOne() {
  const {ref} = useSectionInView('Skills', 0.5)
  

  
  return (
    <section ref={ref} id='skills' className='mb-28 md:max-w-[80rem] max-w-[40rem] justify-center text-center scroll-mt-28 sm:mb-40'>
      <SectionHeading>Skills</SectionHeading>
      <div className='flex flex-row gap-12 pl-12'>
        <div className='flex flex-col gap-2 items-start'>
          <motion.div variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.2}} viewport={{once: true}} className='font-bold text-md hover:border-b-2 hover:border-sky-900 hover:pb-[0.025rem] transition-all hover:cursor-pointer'>LANGUAGES</motion.div>
          <motion.div variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.3}} viewport={{once: true}} className='font-bold text-md hover:border-b-2 hover:border-sky-900 hover:pb-[0.025rem] transition-all hover:cursor-pointer'>FRAMEWORKS</motion.div>
          <motion.div variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.4}} viewport={{once: true}} className='font-bold text-md hover:border-b-2 hover:border-sky-900 hover:pb-[0.025rem] transition-all hover:cursor-pointer'>TOOLS</motion.div>
          <motion.div variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.5}} viewport={{once: true}} className='font-bold text-md hover:border-b-2 hover:border-sky-900 hover:pb-[0.025rem] transition-all hover:cursor-pointer'>INTERPERSONAL</motion.div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <motion.ul variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.2}} viewport={{once: true}} className='flex flex-row justify-center items-center gap-2 text-md text-gray-800'>
            {languagesData.map((skill, index) => (
              <li className='text-md pr-3' key={index}>{skill}</li>
            ))}
          </motion.ul>
          
          <motion.ul variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.3}} viewport={{once: true}} className='flex flex-row justify-center items-center gap-2 text-md text-gray-800'>
            {frameworksData.map((skill, index) => (
              <li className='text-md pr-3' key={index}>{skill}</li>
            ))}
          </motion.ul>

          <motion.ul variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.4}} viewport={{once: true}} className='flex flex-row justify-center items-center gap-2 text-md text-gray-800'>
            {toolsData.map((skill, index) => (
              <li className='text-md pr-3' key={index}>{skill}</li>
            ))}
          </motion.ul>

          <motion.ul variants={skillsHeadAnimationVariants} initial='initial' whileInView='animate' transition={{delay: 0.5}} viewport={{once: true}} className='flex flex-row justify-center items-center gap-2 text-md text-gray-800'>
            {softData.map((skill, index) => (
              <li className='text-md pr-3' key={index}>{skill}</li>
            ))}
          </motion.ul>
        </div>
        
      </div>
      
    </section>
  )
}