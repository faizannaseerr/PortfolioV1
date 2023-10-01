import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ExperienceOne from "@/components/experienceone";
import SkillsOne from "@/components/skillsone";
import SkillsTwo from "@/components/skillstwo";
import ProjectsOne from "@/components/projectsone";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <ProjectsOne/>
      {/* <Projects /> */}
      <SkillsOne/>
      {/* <Skills /> */}
      {/* <SkillsTwo/> */}
      {/* <Experience /> */}
      <ExperienceOne/>
      <Contact />
    </main>
  )
}
