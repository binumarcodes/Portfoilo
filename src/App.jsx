import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Experience from './pages/experience/Experience'
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import CustomCursor from './components/CustomCursor/CustomCursor'
import ProjectCarousel from './pages/project carousel/ProjectCarousel'

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    coverImage: 'project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    coverImage: 'project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    coverImage: 'project3.jpg',
  },
  // Add more projects as needed
];

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      {/* <ProjectCarousel projects={projects} /> */}
      <Contact />
      {/* <CustomCursor /> */}
    </>
  )
}

export default App
