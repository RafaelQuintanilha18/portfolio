import React from 'react';
import './HeroContact.css'

export default function heroContact() {
  return (
    <div className="hero-contact">
      <p>Contact Me</p>
      <hr />
      <a href="https://www.linkedin.com/in/rafael-quintanilha/" target="_blank"><div className="polygon"><i class="fa-brands fa-linkedin-in"></i></div></a>
      <a href="https://github.com/RafaelQuintanilha18" target="_blank"><div className="polygon"><i class="fa-brands fa-github"></i></div></a>
      <a href="mailto:rafael.quintanilha18@gmail.com"><div className="polygon"><i class="fa-solid fa-envelope"></i></div></a>
    </div>
  )
}
