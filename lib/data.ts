import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Research & Management Intern",
    location: "ICC Academy - Dubai",
    description:
      "Performed market research on competitor offerings and presented findings to employers - helped the company gain a competitive edge in terms of services provided.",
    // icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Project Manager",
    location: "Silicon Fen Venture Fund - Dubai",
    description:
      "Helped youth-led startups solidify their ideas into tangible products through industry insights, mentor networking, organizing entrepreneurial seminars, and weekly advising sessions.",
    // icon: React.createElement(AiOutlineFundProjectionScreen),
    date: "2020 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "Timeline Generator",
    description:
      "An app that allows students to generate a degree timetable based on prerequisites, course information of their desirable courses.",
    tags: ["Android Studio", "Java", "Git", "Firebase", "Jira"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Animal Classifier",
    description:
      "A program that implements a neural network to recognize images of cats and dogs and classify them.",
    tags: ["Python", "Numpy", "Scikit-Learn"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Driver Statistics",
    description:
      "Web scraping program that displays F1 statistics from the internet on the current season based on user input, e.g. standings, DNFs, wins, etc.",
    tags: ["Python", "BeautifulSoup", "Requests"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "Website displaying info about my education, experience, and skills.",
    tags: ["React", "Tailwind", "NextJS", "Framer Motion", "HTML"],
    imageUrl: wordanalyticsImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Android Studio",
  "Git",
  "Tailwind",
  "Jira",
  "React Native",
  "AWS Amplify",
  "GraphQL",
  "Python",
  "Framer Motion",
  "C",
  "Java",
  "Firebase",
  "Teamwork",
  "Communication",
] as const;

export const languagesData = [
  "HTML",
  "CSS",
  "JavaScript (ES6)",
  "TypeScript",
  "R",
  "C",
  "Python",
  "Java",
] as const;

export const frameworksData = [
  "React",
  "NextJS",
  "Node",
  "ExpressJS",
  "Tailwind",
  "React Native",
  "Framer Motion",

] as const;

export const toolsData = [
  "Firebase",
  "MongoDB",
  "Git & GitHub",
  "Jira",
  "Figma",
] as const;

export const softData = [
  "Teamwork",
  "Communication",
  "Critical Thinking",
  "Time Management",
  "Organizational Skills"
] as const;