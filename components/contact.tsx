"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

const contactAnimationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
}

// use skills logic here

export default function Contact() {
  const { ref } = useSectionInView('Contact')
  return (
    <motion.section ref={ref} id='contact' variants={contactAnimationVariants} initial='initial' whileInView='animate' transition={{ delay: 0.175, duration: 0.6 }} viewport={{ once: true }} className='z-10 scroll-mt-28 text-2xl md:max-w-[55rem] max-w-[30rem] px-4 items-center justify-center mb-12'>
      <SectionHeading> Contact Me </SectionHeading>
      <motion.div className='md:!text-[1rem] text-[0.9rem] p-10 h-full w-full bg-gradient-to-r from-sky-950 to-sky-700 rounded-2xl flex md:flex-row flex-col gap-8 justify-center items-center md:space-x-32' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <div className='flex flex-col leading-[1.5rem]'>
          <span className='text-gray-50 text-center md:text-left font-medium opacity-90'>I'm always on the lookout for exciting opportunities, feel free to send across a message!</span>
        </div>

        <div className='group'>
          <span className='relative md:top-2 z-[11] md:left-24 top-2 left-[83px] flex md:h-3 md:w-3 h-2.5 w-2.5 -translate-y-1 transition-all'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-50 opacity-75'></span>
            <span className="relative inline-flex rounded-full md:h-3 md:w-3 h-2.5 w-2.5 bg-gray-100"></span>
          </span>
          <a href='mailto:f.naseer@mail.utoronto.ca' className='-translate-y-1 transition-all group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-gray-900 text-gray-50 opacity-90 flex flex-row items-center justify-center bg-black rounded-2xl md:px-10 px-9 py-3'>
            <MdEmail className='text-gray-50 md:h-7 md:w-7 h-5 w-5 opacity-90 group-hover:opacity-100 transition-all group-hover:scale-105 items-center' />
          </a>

        </div>


      </motion.div>

      {/* <p className="text-gray-700 justify-center text-sm mt-6 mb-2 flex flex-row gap-2"> Created by Faizan Naseer</p> */}
    </motion.section>
  )
}
