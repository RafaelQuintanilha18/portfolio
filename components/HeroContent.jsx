import React from 'react';
import './HeroContent.css'
import profilePicture from '../src/assets/portfolio_profile.png'

export default function heroContent() {
  return (
    <div className="topSection">

      <div className="introText">
        <h1>HELLO</h1>
          <h2>I'm </h2>
          <h2>Rafael <span style={{color: '#00ADB5'}}>Quintanilha</span></h2>
          <hr />
          <p>Front-end Developer</p>
          <img className="profile_pic" src={profilePicture} alt="" />
      </div>

      <div className="hero-contact">
        <p>Contact Me</p>
        <hr />
        <a href="https://www.linkedin.com/in/rafael-quintanilha/" target="_blank"><div className="polygon"><i class="fa-brands fa-linkedin-in"></i></div></a>
        <a href="https://github.com/RafaelQuintanilha18" target="_blank"><div className="polygon"><i class="fa-brands fa-github"></i></div></a>
        <a href="mailto:rafael.quintanilha18@gmail.com"><div className="polygon"><i class="fa-solid fa-envelope"></i></div></a>
      </div>
    </div>

  )
}
