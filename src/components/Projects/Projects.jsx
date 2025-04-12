import React from 'react'
import './Projects.css'
import netflix_img from '../../assets/Netflix-Clone-1.PNG'
import news_img from '../../assets/News-App-1.PNG'
import weather_img from '../../assets/Weather-App-1.PNG'

const Projects = () => {
  return (
    <div id="projects" class="projects">
      <h1>projects</h1>
      <div class="projects-container">
        <div class="projects-card">
          <img src={netflix_img} alt="Picture of Netflix Clone home page." />
          <h2>Netflix Clone</h2>
          <div class="project-content">
            <h3>Features</h3>
            <ul>
              <li>Sign In</li>
              <li>Firebase Auth</li>
              <li>Notifications</li>
              <li>Scrollable Search</li>
              <li>Video Player</li>
            </ul>
          </div>
        </div>
        <div class="projects-card">
          <img src={news_img} alt="Picture of News App starting page." />
          <h2>News App</h2>
          <h3>Features</h3>
          <div class="project-content">
            <h3>Features</h3>
            <ul>
              <li>Pagination</li>
              <li>Category Filter</li>
              <li>Search</li>
            </ul>
          </div>
        </div>
        <div class="projects-card">
          <img src={weather_img} alt="Picture of Weather App." />
          <h2>Weather App</h2>
          <h3>Features</h3>
          <div class="project-content">
            <h3>Features</h3>
            <ul>
              <li>City Search</li>
              <li>Dynamic Icons</li>
              <li>Dynamic Temperature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects