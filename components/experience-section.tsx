"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { experiencesData} from '@/lib/data'

// shadow-md shadow-gray-800 hover:opacity-95 -- try to create clickable and minimizable features

type ExperienceProps = typeof experiencesData[number]


export default function ExperienceSection({title, location, description, date}: ExperienceProps) {
  return (
    <motion.div className='bg-gradient-to-r group from-slate-950 to-slate-700 cursor-pointer transition-opacity flex flex-col space-between md:h-full md:w-full sm:max-h-[40rem] sm:max-w-[40rem] max-h-[20rem] max-w-[20rem] text-gray-50 rounded-2xl p-5'>
      
      <div className='flex flex-row justify-between items-center pb-1'>
        <span className='font-bold md:text-xl sm:text-lg text-base'> {title} </span>
        <span className='font-bold md:text-lg sm:text-base text-sm opacity-80 group-hover:animate-pulse'> {date} </span>
      </div>
      <span className='md:text-sm text-xs pb-16'> {location}</span>
      <div className='flex flex-row'>
        <span className='md:text-sm text-xs'> {description} </span>
        <div className='opacity-0'>hellooooooo</div>
      </div>
      
    </motion.div>
  )
}
