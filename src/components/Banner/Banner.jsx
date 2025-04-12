import React from 'react'
import './Banner.css'
import banner_img from "../../assets/dots.webm"

const Banner = () => {
  return (
    <div class="banner">
      <video autoplay loop muted>
        <source src={banner_img} type="video/webm" />
      </video>
      <p class="small">hi im</p>
      <p class="large">beau</p>
    </div>
  )
}

export default Banner