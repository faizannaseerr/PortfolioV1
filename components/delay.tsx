"use client"

import React, {useState, useEffect} from 'react'
import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from './header';

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
      <div className='bg-[#d8f7f6] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[4rem] sm:w-[68.75rem] animate-extend-slow-2'></div>
      <div className='bg-[#c2e0f4] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[4rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] animate-extend-slow-1'></div> 
      <ActiveSectionContextProvider>
        <Header/>
        {children} 
      </ActiveSectionContextProvider>
      {/* [#d8f7f6] [#c2e0f4]*/}
    </div>
  )
}


