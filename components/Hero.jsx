import React from 'react';
import Navbar from './Header/Navbar/Navbar';
import HeroContent from './Header/MainContent/HeroContent';
import HeroContact from './Header/MainContent/HeroContact';
import AboutMe from './Header/MainContent/AboutMe';
import Skills from './Header/MainContent/Skills';
import Portfolio from './Header/MainContent/Portfolio';
import Footer from './Header/MainContent/Footer';




export default function Hero() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="topSection">
          <HeroContent />
          <HeroContact />
        </div>
        <AboutMe />
        <img src="src/assets/triangle.png" alt="" id='triangle' />
      </div>
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}
