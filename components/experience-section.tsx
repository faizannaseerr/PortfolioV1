"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { experiencesData } from '@/lib/data'

// shadow-md shadow-gray-800 hover:opacity-95 -- try to create clickable and minimizable features

type ExperienceProps = typeof experiencesData[number]


export default function ExperienceSection({ title, location, description, date }: ExperienceProps) {
  return (
    <motion.div className='hover:shadow-md bg-gradient-to-r group from-slate-950 to-slate-700 cursor-pointer transition-opacity flex flex-col space-between md:h-full md:w-full sm:max-h-[40rem] sm:max-w-[40rem] text-gray-50 rounded-2xl md:p-5 px-2 py-6'>
      <div className='flex flex-col sm:text-left text-center sm:justify-between justify-center'>
        <div className='flex sm:flex-row flex-col justify-between items-center pb-1'>
          <span className='font-bold md:text-xl text-lg'> {title} </span>
          <span className='font-bold md:text-lg text-base opacity-80 group-hover:animate-pulse'> {date} </span>
        </div>
        <span className='text-sm sm:pb-16'> {location}</span>
      </div>

      <div className='flex flex-row sm:py-0 sm:px-0 pt-12 px-8 text-left sm:text-left'>
        <span className='text-sm'> {description} </span>
        <div className='opacity-0 sm:visible invisible sm:text-base text-[0rem]'>hellooooo</div>
      </div>

    </motion.div>
  )
}
