"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {projectsData} from'@/lib/data'
import Project from'./project'
import { useSectionInView } from '@/lib/hooks'
import ProjectOne from './projectone'


export default function ProjectsOne() {
  const {ref} = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
      <SectionHeading>Projects</SectionHeading>
      <div className='flex flex-row gap-4 flex-nowrap items-center justify-center overflow-x-auto'>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectOne {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}