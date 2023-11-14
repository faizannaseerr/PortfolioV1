"use client"

import React, {useState, useEffect} from 'react'
import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from './header';
import {motion} from "framer-motion";

// animate-extend-slow-2  animate-extend-slow-1

export default function Delay({children} : {children: React.ReactNode}) {
  const [showComponent, setShowComponent] = useState(false); 
 
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 2100); 
 
    return () => clearTimeout(timeout); 
  }, []); 
 
  return ( 
    <div> 
      {showComponent && <DelayedComponent children={children}/>} 
    </div> 
  ); 
}; 

const DelayedComponent = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='z-10'>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.8}} className='bg-gradient-to-r from-[#d8f7f6] to-[#c2e0f4] absolute top-[-4rem] -z-10 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-3xl sm:w-[68.75rem] animate-extend-slow-1'></motion.div>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.5}} className='bg-gradient-to-r to-[#d8f7f6] from-[#c2e0f4] absolute top-[-4rem] -z-10 left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-3xl sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] animate-extend-slow-2'></motion.div> 
      <ActiveSectionContextProvider>
        <Header/>
        {children} 
      </ActiveSectionContextProvider>
      {/* [#d8f7f6] [#c2e0f4]*/}
    </div>
  )
}


