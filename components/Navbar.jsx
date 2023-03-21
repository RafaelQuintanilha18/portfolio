import React, { useState, useEffect } from "react"
import './Navbar.css'

export default function Navbar() {

  const [stickyClass, setStickClass] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, []);

  const stickNavbar = () => {
    if (window !== undefined ) {
      let windowHeight = window.scrollY
      windowHeight > 300 ? setStickClass('navbar-fixed') : setStickClass('');
    }
  };

  const toggleNavbar = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="nav-container">
      <div className="navbar-menu">
        <ul className={`navbar ${stickyClass}`}>
          <li><a href="#aboutmeSection">About Me</a></li>
          <li><a href="#skillsSection">Skills</a></li>
          <li><a href="#portfolioSection">Portfolio</a></li>
          <li><a href="#contactSection">Contact</a></li>
          <a href="https://drive.google.com/file/d/1i_gyCMmuuRimosrzEDSB5zfg920J832-/view?usp=share_link" target="_blank" className="btn--slide">
            <span className="circle"><i class="fa fa-download"></i></span>
            <span className="title">DOWNLOAD MY CV</span>
            <span className="title-hover">THANK YOU! </span>
         </a>
         <li className="download"><a href="#contactSection">Download</a></li>

        </ul>
      </div>

      <div className="navbar-burguer">
        <div onClick={toggleNavbar} className="icon">
        <i className="fa-solid fa-bars"></i>
        </div>
        <div onClick={toggleNavbar} className={showMenu ? 'showMenu' : ''}>
          <ul className="burguer">
            <li><a href="#aboutmeSection">About Me</a></li>
            <li><a href="#skillsSection">Skills</a></li>
            <li><a href="#portfolioSection">Portfolio</a></li>
            <li><a href="#contactSection">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1i_gyCMmuuRimosrzEDSB5zfg920J832-/view?usp=share_link" target="_blank">Download My CV</a></li>
          </ul>
        </div>
      </div>

    </div>



  )
}
