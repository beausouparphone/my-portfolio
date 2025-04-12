import React from 'react'
import './AboutMe.css'
import about_me from '../../assets/person-placeholder.png'

const AboutMe = () => {
  return (
    <div id="about-me" class="about-me">
      <div class="about-me-content">
        <h1>about me</h1>
        <p>
          I'm an industrial robotics programmer with 4 years of experience trying to become a front end developer.
          The restrictions that are bound to creep up in real world engineering no longer interest me.
          The potential to create without limitation excites me in ways that I have not felt since staring my engineering journey.
          There are many parallels between robotics engineering and front end web development, espcially between the human machine interface (HMI) and UI/UX expereince of a web user.
          
        </p>
      </div>
      <div class="about-me-container">
        <img src={about_me} alt="Image of Beau" />
      </div>
    </div>
  )
}

export default AboutMe