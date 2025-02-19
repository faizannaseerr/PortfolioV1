"use client"

import Image from 'next/image'
import React from 'react'
import me from "@/public/me.png"
import { motion } from 'framer-motion'
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

//tasks
// 1. fix transitions for landing page -----✓✓✓✓✓-----
// 2. add uoft picture in between thing later ig
// 3. add one animation on website later ig
// 4. update all of this on vercel & then 
// 5. make the background gradient move -----✓✓✓✓✓-----
// 6. add github and depoyment icons for projects

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <div className='flex flex-column sm:mt-0 h-screen w-screen items-center justify-center'>
      {/* <div className='bg-gradient-to-b from-sky-800 to-cyan-700 h-100 w-60 rounded-xl'></div> */}
      <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }}>
              <Image src={me} alt="Faizan Portrait" quality="95" priority={true} className='bg-transparent md:w-40 md:h-40 w-36 h-36' />
            </motion.div>
            {/* <motion.span className='text-4xl bottom-0 right-0 absolute' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: 'spring', stiffness: 125, delay: 0.3, duration: 0.7}}> 👋🏼 </ motion.span> */}
          </div>
        </div>

        {/* <motion.p className='mb-10 mt-4 px-4 md:text-3xl lg:text-4xl lg:max-w-[55rem] md:max-w-[40rem] text-xl font-medium !leading-[1.5]' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7, duration: 0.3}}> */}
        {/* <span className='font-bold group md:text-[3.2rem] text-[2.2rem] block md:leading-[1.5] md:mb-0 leading-[1.2] md:pl-12 hover:cursor-pointer mb-4 text-center'> Hello, I'm Faizan. <span className='md:group-hover:opacity-100 md:visible invisible opacity-0 md:text-[3.2rem] text-[0rem] transition-all'>👋🏼</span></span> I am a junior at the {" "} */}
        {/* <a href='https://www.utoronto.ca' target='_blank' className=' font-bold text-sky-900 transition-all hover:text-sky-950'>University of Toronto</a> */}
        {/* <a href='https://www.utoronto.ca' target='_blank' className='font-bold bg-gradient-to-r from-sky-800 px-3 py-1 hover:px-5 transition-all text-gray-50 rounded hover:text-sky-900 hover:border-2 hover:border-black to-cyan-700 hover:from-white hover:to-white'>University of Toronto</a> */}
        {/* <a href='https://www.manchester.ac.uk' target='_blank' className='font-bold bg-gradient-to-r from-purple-800 px-3 py-1 hover:px-5 transition-all text-gray-50 rounded hover:text-purple-900 hover:border-2 hover:border-black to-violet-800 hover:from-white hover:to-white'>University of Manchester</a>  */}
        {/* <a href='https://www.manchester.ac.uk' target='_blank' className=' font-bold text-purple-900 transition-all hover:text-purple-950'>University of Manchester</a> */}
        {/* , pursuing an undergraduate computer science degree. My interests lie in design, development, and artificial intelligence. */}
        {/* </motion.p> */}

        <motion.p className='mb-10 mt-4 px-4 md:text-3xl lg:text-4xl lg:max-w-[60rem] md:max-w-[40rem] text-xl font-medium !leading-[1.5]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.3 }}>
          <span className='font-bold group md:text-[3.2rem] text-[2.2rem] block md:leading-[1.5] md:mb-0 leading-[1.2] md:pl-12 hover:cursor-pointer mb-4 text-center'> Hello, I'm Faizan. <span className='md:group-hover:opacity-100 md:visible invisible opacity-0 md:text-[3.2rem] text-[0rem] transition-all'>👋🏼</span></span> I am a junior at the {" "}
          <a href='https://www.utoronto.ca' target='_blank' className=' font-bold text-sky-900 transition-all hover:text-sky-950'>University of Toronto</a>
          {/* <a href='https://www.utoronto.ca' target='_blank' className='font-bold bg-gradient-to-r from-sky-800 px-3 py-1 hover:px-5 transition-all text-gray-50 rounded hover:text-sky-900 hover:border-2 hover:border-black to-cyan-700 hover:from-white hover:to-white'>University of Toronto</a> */}
          {/* <a href='https://www.manchester.ac.uk' target='_blank' className='font-bold bg-gradient-to-r from-purple-800 px-3 py-1 hover:px-5 transition-all text-gray-50 rounded hover:text-purple-900 hover:border-2 hover:border-black to-violet-800 hover:from-white hover:to-white'>University of Manchester</a>  */}
          {/* <a href='https://www.manchester.ac.uk' target='_blank' className=' font-bold text-purple-900 transition-all hover:text-purple-950'>University of Manchester</a> */}
          , pursuing an undergraduate computer science degree. My focus areas consist of software design, development and the utility of artificial intelligence.
        </motion.p>


        <motion.div className='flex justify-center items-center md:gap-2 px-4 text-xs md:text-base md:font-medium flex-col sm:flex-row gap-3' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.3 }}>
          <Link href="#contact" onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now)
          }} className='cursor-pointer group bg-gray-900 text-white px-7 py-3 w-52 md:w-auto flex items-center justify-center  hover:shadow-sm rounded-lg gap-2 outline-none hover:bg-gray-950 active:scale-102 transition-all'> Contact me here <BsArrowRight className='opacity-70 md:text-base text-[0rem] md:visible invisible group-hover:translate-x-1 transition' /></Link>
          {/* <Link href="#contact" className='cursor-pointer group text-gray-700 p-4 flex items-center justify-center gap-2 outline-none hover:scale-105 active:scale-102 transition-all'> Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link> */}

          <a className='cursor-pointer group bg-white px-7 py-3 md:w-auto w-52 flex items-center justify-center rounded-lg gap-2 outline-none hover:shadow-sm active:scale-102 transition-all border border-black/10' href='/CV.pdf' download> My Résumé <HiDownload className='opacity-60 group-hover:-translate-x-2 md:text-base text-[0rem] sm:visible invisible transition group-hover:animate-bounce' /> </a>
          {/* <a className='cursor-pointer group p-4 flex items-center justify-center gap-2 hover:scale-105 active:scale-102 transition-all' target='_blank' href='/CV.pdf' download> My Résumé <HiDownload className='opacity-60 group-hover:translate-x-1 transition group-hover:animate-bounce'/> </a> */}
          <div className='flex flex-row gap-2'>
            <a className='cursor-pointer group bg-white p-4 text-gray-700 flex items-center justify-center rounded-lg gap-2 hover:shadow-sm hover:text-gray-950 active:scale-105 transition-all border border-black/10' href="https://www.linkedin.com/in/faizan-naseerr/" target="_blank"> <BsLinkedin className='' /> </a>
            {/* <a className='cursor-pointer group p-4 text-gray-700 flex items-center justify-center gap-2 hover:text-gray-950 hover:scale-105 active:scale-105 transition-all' href="https://www.linkedin.com/in/faizan-naseerr/" target="_blank"> <BsLinkedin className=''/> </a> */}

            <a className='cursor-pointer group bg-white p-4 text-gray-700 flex items-center justify-center rounded-lg gap-2 hover:shadow-sm hover:text-gray-950 active:scale-105 transition-all border border-black/10' href="https://github.com/faizannaseerr" target="_blank"> <BsGithub className='' /> </a>
            {/* <a className='cursor-pointer group p-4 text-gray-700 flex items-center justify-center gap-2 hover:text-gray-950 hover:scale-105 active:scale-105 transition-all' href="https://github.com/faizannaseerr" target="_blank"> <BsGithub className=''/> </a> */}
          </div>

        </motion.div>
      </section>
      {/* <div className='bg-white h-100 w-60 rounded-xl'></div> */}
    </div>

  )
}
