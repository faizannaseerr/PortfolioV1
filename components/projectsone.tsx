"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'
import ProjectOne from './projectone'


export default function ProjectsOne() {
  const { ref } = useSectionInView('Projects', 0.15)

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 sm:mb-28 mb-20'>
      <SectionHeading>Projects</SectionHeading>
      <div className='grid grid-cols-2 gap-4 mt-8 items-center justify-center sm:px-0 px-4'>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectOne {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}
