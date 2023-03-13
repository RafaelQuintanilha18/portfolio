import React, { useState } from 'react';
import Navbar from '/components/Navbar';
import HeroContent from '/components/HeroContent';
import HeroContact from '/components/HeroContact';
import AboutMe from '/components/AboutMe';
import Skills from '/components/Skills';
import Portfolio from '/components/Portfolio';
import Footer from '/components/Footer';
import './App.css';
import triangle from '../src/assets/triangle.png';

export default function App() {



  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="topSection">
          <HeroContent />
          <HeroContact />
        </div>
        <AboutMe />
      </div>
        <img src={triangle} alt="" id='triangle' />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}
