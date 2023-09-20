"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { experiencesData} from '@/lib/data'

// shadow-md shadow-gray-800 hover:opacity-95 -- try to create clickable and minimizable features

type ExperienceProps = typeof experiencesData[number]


export default function ExperienceSection({title, location, description, date}: ExperienceProps) {
  return (
    <motion.div className='bg-gradient-to-r group from-slate-950 to-slate-700 cursor-pointer transition-opacity flex flex-col space-between h-full w-full text-gray-50 rounded-2xl p-5'>
      
      <div className='flex flex-row justify-between items-center pb-1'>
        <span className='font-bold text-xl'> {title} </span>
        <span className='font-bold text-lg opacity-80 group-hover:animate-pulse'> {date} </span>
      </div>
      <span className='text-sm pb-16'> {location}</span>
      <div className='flex flex-row'>
        <span className='text-sm'> {description} </span>
        <div className='opacity-0'>hellooooooo</div>
      </div>
      
    </motion.div>
  )
}
