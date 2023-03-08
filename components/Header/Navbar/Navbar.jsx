import React from "react"
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      <button id="btn--download">DOWNLOAD CV <i class="fa-solid fa-download"></i>
        </button>
      </ul>

    </div>
  )
}
