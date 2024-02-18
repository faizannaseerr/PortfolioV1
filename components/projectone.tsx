"use client"

import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import {useRef} from 'react'
import {projectsData} from'@/lib/data'

type ProjectProps = typeof projectsData[number]

export default function ProjectOne({
  title,
  description,
  tags,
  imageUrl,
  link
}: ProjectProps) {

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  // style={{scale:scaleProgress, opacity:opacityProgress}}

  const projectAnimationVariants = {
    initial: {opacity: 0},
    animate: {opacity: 1},
  }

  return (
    <motion.div ref={ref} initial='initial' whileInView='animate' viewport={{once: true}} variants={projectAnimationVariants} transition={{delay: 0.6}} className=''>
      <section className='flex-col flex max-w-[30rem] group'>
        {/* <div className='p-8 border-2 border-gray-800 rounded-xl group-hover:p-4 transition-all'> */}
          <a href={link} target="_blank">
            <Image className='relative rounded-xl backdrop-blur-xl bg-white/30 transition-all md:opacity-25 md:hover:opacity-100' src={imageUrl} alt={title} quality={95}/>
          </a>
          
        {/* </div> */}
        
        

        
          
        <div className='flex flex-col'>
          <h3 className='font-bold sm:text-2xl text-xl my-4 text-center'>{title}</h3>
          <p className='mb-4 opacity-70 text-sm'>{description}</p>
          <div className='flex flex-row sm:visible invisible'>
            <p className='text-sm sm:font-semibold font-medium mr-2'>Technologies:</p>
            <ul className='flex flex-row gap-2 flex-wrap text-sm'>{tags.map((tag, index) => (
                <li className='hover:border-sky-900 hover:border-b-2 hover:pb-[0.125rem] transition-all' key={index}>{tag}</li>)
              )}
            </ul>
          </div>
          
        </div>
      </section>
    </motion.div>
)}
