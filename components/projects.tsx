"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {projectsData} from'@/lib/data'
import Project from'./project'
import { useSectionInView } from '@/lib/hooks'
import ProjectOne from './projectone'


export default function Projects() {
  const {ref} = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
      <SectionHeading>Projects</SectionHeading>
      <div className='grid grid-cols-1 gap-8 items-center justify-center'>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}
