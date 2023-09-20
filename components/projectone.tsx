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
  imageUrl
}: ProjectProps) {

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div ref={ref} style={{scale:scaleProgress, opacity:opacityProgress}} className=''>
      <section className='bg-gradient-to-r from-green-950 to-emerald-700 p-8 rounded-2xl'>
        <div className=''>
          <h3 className='font-bold text-2xl'>{title}</h3>
          <p className=''>{description}</p>
          <ul className='o'>{tags.map((tag, index) => (
              <li className='' key={index}>{tag}</li>)
            )}
          </ul>
        </div>
        
        <Image className='' src={imageUrl} alt={title} quality={95}/>
      </section>
    </motion.div>
)}