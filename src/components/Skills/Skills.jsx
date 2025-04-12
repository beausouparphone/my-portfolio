import React from 'react'
import './Skills.css'
import react_logo from '../../assets/react-logo.png'
import redux_logo from '../../assets/redux-logo.png'
import javascript_logo from '../../assets/javascript-logo.png'
import git_logo from '../../assets/git-logo.png'
import html_logo from '../../assets/html-logo.png'
import css_logo from '../../assets/css-logo.png'


function Skills() {
  return (
    <section id="skills" class="skills">
      <h1>skills</h1>
      <div class="skills-container">
        <div class="skills-card">
          <img src={react_logo} alt="React Logo" />
          <p>React</p>
        </div>
        <div class="skills-card">
          <img src={redux_logo} alt="Redux Logo" />
          <p>Redux</p>
        </div>
        <div class="skills-card">
          <img src={javascript_logo} alt="JavaScript Logo"  />
          <p>JavaScript</p>
        </div>
        <div class="skills-card">
          <img src={git_logo} alt="Git Logo" />
          <p>Git</p>
        </div>
        <div class="skills-card">
          <img src={html_logo} alt="HTML Logo" />
          <p>HTML</p>
        </div>
        <div class="skills-card">
          <img src={css_logo} alt="CSS Logo" />
          <p>CSS</p>
        </div>
      </div>
    </section>
  )
}

export default Skills