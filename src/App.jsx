import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App