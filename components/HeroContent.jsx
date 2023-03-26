import React from 'react';
import './HeroContent.css'
import profilePicture from '../src/assets/portfolio_profile.png'
import SocialMediaIcons  from './SocialMediaIcons';

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
        <SocialMediaIcons className="hero-contact-icons"/>
      </div>
    </div>
  )
}
