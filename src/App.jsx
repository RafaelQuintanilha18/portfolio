import React, { useState } from 'react';
import Navbar from '/components/Navbar';
import HeroContent from '/components/HeroContent';
import AboutMe from '/components/AboutMe';
import Skills from '/components/Skills';
import Portfolio from '/components/Portfolio';
import Footer from '/components/Footer';
import './App.css';


export default function App() {

  return (
    <div>
      <div className="container">
        <Navbar />
        <HeroContent />
        <AboutMe />
      </div>
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}
