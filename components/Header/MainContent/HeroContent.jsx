import React from 'react';
import './HeroContent.css'

export default function heroContent() {
  return (
      <div className="introText">
        <h1>HELLO</h1>
        <div className="text-wrapper">
          <h2>I'm </h2>
          <h2>Rafael <span style={{color: '#00ADB5'}}>Quintanilha</span></h2>
          <hr />
          <p>Front-end Developer</p>
        </div>
        <img className="profile_pic" src="../src/assets/portfolio_profile.png" alt="" />
      </div>

  )
}
