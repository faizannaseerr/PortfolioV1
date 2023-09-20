"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { frameworksData, skillsData, softData, toolsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import {motion} from 'framer-motion'
import { languagesData } from '@/lib/data'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.025 * index
    }
  })
}

export default function SkillsTwo() {
  const {ref} = useSectionInView('Skills')
  
  return (
    <section ref={ref} id='skills' className='mb-28 w-full scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>Skills</SectionHeading>
      {/* <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li className='bg-white border border-black/[0.1] rounded-xl hover:bg-black hover:text-white cursor-pointer transition duration-[450ms] cursor:pointer px-5 py-3' key={index} custom={index} variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{once: true}}>{skill}</motion.li>
        ))}
      </ul> */}
      <div className="relative flex overflow-x-hidden mb-8 border-y-2 group cursor-pointer">
        <div className="py-12 animate-marquee whitespace-nowrap items-center group-hover:pause transition-all">
          <span className="text-2xl mx-4 font-bold">LANGUAGES</span>
          {languagesData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
          <span className="text-2xl mx-4 font-bold">LANGUAGES</span>
          {languagesData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap items-center group-hover:pause transition-all">
          <span className="text-2xl mx-4 font-bold">LANGUAGES</span>
          {languagesData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
          <span className="text-2xl mx-4 font-bold">LANGUAGES</span>
          {languagesData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden mb-8 border-y-2 group cursor-pointer">
        <div className="py-12 animate-marquee whitespace-nowrap items-center group-hover:pause transition-all">
          <span className="text-2xl mx-4 font-bold">FRAMEWORKS</span>
          {frameworksData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap items-center group-hover:pause transition-all">
          <span className="text-2xl mx-4 font-bold">FRAMEWORKS</span>
          {frameworksData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden mt-8 border-y-2 group cursor-pointer">
        <div className="py-12 animate-marquee whitespace-nowrap items-center group-hover:pause transition-all">
          <span className="text-2xl mx-4 font-bold">TOOLS</span>
          {toolsData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap items-center group-hover:pause transition-all">
          <span className="text-2xl mx-4 font-bold">TOOLS</span>
          {toolsData.map((skill, index) => (
              <span className="text-1xl mx-4 opacity-90 uppercase" key={index}>{skill}</span>
            ))}
        </div>
      </div>

    </section>
  )
}