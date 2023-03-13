import React from "react"
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <a href="#aboutmeSection"><li>About Me</li></a>
        <a href="#skillsSection"><li>Skills</li></a>
        <a href="#portfolioSection"><li>Portfolio</li></a>
        <a href="#contactSection"><li>Contact</li></a>
      <a href="https://drive.google.com/file/d/1i_gyCMmuuRimosrzEDSB5zfg920J832-/view?usp=share_link" target="_blank" className="btn--slide">
        <span className="circle"><i class="fa fa-download"></i></span>
        <span className="title">DOWNLOAD MY CV</span>
        <span className="title-hover">CLICK HERE!</span>
      </a>
      </ul>

    </div>
  )
}
