"use client"

import Image from 'next/image'
import React from 'react'
import me from "@/public/me.png"
import {motion} from 'framer-motion'
import Link from "next/link"
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'

//tasks
// 1. fix transitions for landing page -----✓✓✓✓✓-----
// 2. add uoft picture in between thing later ig
// 3. add one animation on website later ig
// 4. update all of this on vercel & then 
// 5. make the background gradient move -----✓✓✓✓✓-----
// 6. add github and depoyment icons for projects

export default function Intro() {
  const {ref} = useSectionInView('Home', 0.5)
  
  return (
    <div className='flex flex-column'>
      {/* <div className='bg-gradient-to-b from-sky-800 to-cyan-700 h-100 w-60 rounded-xl'></div> */}
      <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
          <div className='relative'> 
            <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween", duration: 0.2, delay: 0.2}}>
              <Image src={me} alt="Faizan Portrait" width="160" height="160" quality="95" priority={true} className='bg-transparent'/>
            </motion.div>
            {/* <motion.span className='text-4xl bottom-0 right-0 absolute' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: 'spring', stiffness: 125, delay: 0.3, duration: 0.7}}> 👋🏼 </ motion.span> */}
          </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4}}>
          <span className='font-bold group text-[3.5rem] block pl-12 hover:cursor-pointer'> Hello, I'm Faizan. <span className='group-hover:opacity-100 opacity-0 text-[3.5rem] transition-all'>👋🏼</span></span> I am a junior at the {" "}
          <a href='https://www.utoronto.ca' target='_blank' className=' font-bold text-sky-900 transition-all hover:text-sky-950'>University of Toronto</a>
          {/* <a href='https://www.utoronto.ca' target='_blank' className='font-bold bg-gradient-to-r from-sky-800 px-3 py-1 hover:px-5 transition-all text-gray-50 rounded hover:text-sky-900 hover:border-2 hover:border-black to-cyan-700 hover:from-white hover:to-white'>University of Toronto</a> */}
          {/* <a href='https://www.manchester.ac.uk' target='_blank' className='font-bold bg-gradient-to-r from-purple-800 px-3 py-1 hover:px-5 transition-all text-gray-50 rounded hover:text-purple-900 hover:border-2 hover:border-black to-violet-800 hover:from-white hover:to-white'>University of Manchester</a>  */}
          {/* <a href='https://www.manchester.ac.uk' target='_blank' className=' font-bold text-purple-900 transition-all hover:text-purple-950'>University of Manchester</a> */}
          , pursuing an undergraduate computer science degree. My interests lie between design, development, and artificial intelligence.
        </motion.p>


        <motion.div className='flex justify-center items-center gap-2 px-4 text-md font-medium flex-col sm:flex-row' initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}>
          <Link href="#contact" className='cursor-pointer group bg-gray-900 text-white px-7 py-3 flex items-center justify-center  hover:shadow-sm rounded-full gap-2 outline-none hover:scale-105 hover:bg-gray-950 active:scale-102 transition-all'> Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
          {/* <Link href="#contact" className='cursor-pointer group text-gray-700 p-4 flex items-center justify-center gap-2 outline-none hover:scale-105 active:scale-102 transition-all'> Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link> */}
  
          <a className='cursor-pointer group bg-white px-7 py-3 flex items-center justify-center rounded-full gap-2 outline-none hover:shadow-sm hover:scale-105 active:scale-102 transition-all border border-black/10' href='/CV.pdf' download> My Résumé <HiDownload className='opacity-60 group-hover:-translate-x-2 transition group-hover:animate-bounce'/> </a>
          {/* <a className='cursor-pointer group p-4 flex items-center justify-center gap-2 hover:scale-105 active:scale-102 transition-all' href='/CV.pdf' download> My Résumé <HiDownload className='opacity-60 group-hover:translate-x-1 transition group-hover:animate-bounce'/> </a> */}

          <a className='cursor-pointer group bg-white p-4 text-gray-700 flex items-center justify-center rounded-full gap-2 hover:shadow-sm hover:text-gray-950 hover:scale-105 active:scale-105 transition-all border border-black/10' href="https://www.linkedin.com/in/faizan-naseerr/" target="_blank"> <BsLinkedin className=''/> </a>
          {/* <a className='cursor-pointer group p-4 text-gray-700 flex items-center justify-center gap-2 hover:text-gray-950 hover:scale-105 active:scale-105 transition-all' href="https://www.linkedin.com/in/faizan-naseerr/" target="_blank"> <BsLinkedin className=''/> </a> */}

          <a className='cursor-pointer group bg-white p-4 text-gray-700 flex items-center justify-center rounded-full gap-2 hover:shadow-sm hover:text-gray-950 hover:scale-105 active:scale-105 transition-all border border-black/10' href="https://github.com/faizannaseerr" target="_blank"> <BsGithub className=''/> </a>
          {/* <a className='cursor-pointer group p-4 text-gray-700 flex items-center justify-center gap-2 hover:text-gray-950 hover:scale-105 active:scale-105 transition-all' href="https://github.com/faizannaseerr" target="_blank"> <BsGithub className=''/> </a> */}
        </motion.div>
      </section>
      {/* <div className='bg-white h-100 w-60 rounded-xl'></div> */}
    </div>
    
  )
}
