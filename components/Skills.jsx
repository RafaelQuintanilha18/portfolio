import React from 'react';
import reactIcon from '../src/assets/reactjs.png'
import typescript from '../src/assets/typescript.png';
import gitIcon from '../src/assets/git.png'
import githubIcon from '../src/assets/gitlab.png'
import jsIcon from '../src/assets/js.png'
import bootstraptIcon from '../src/assets/bootstrap5.png'
import htmlIcon from '../src/assets/html5.png'
import cssIcon from '../src/assets/css.png'
import rubyIcon from '../src/assets/ruby.png'
import railsIcon from '../src/assets/rails.png'
import mysqlIcon from '../src/assets/mysql.png'
import triangle from '../src/assets/triangle.png';
import tailwind from '../src/assets/tailwind.png';
import vitejs from '../src/assets/vitejs.png'
import figma from '../src/assets/figma.png'
import wordpress from '../src/assets/wordpress.png'
import materialui from '../src/assets/material-ui.png'

export default function skills() {
  return (
    <div className='skills'>
      <img src={triangle} alt="" id='triangle' />
      <div className="skills--title">
        <h1>Skills</h1>
        <h2 id='skillsSection'>Skills</h2>
      </div>
      <div className='skills--badges'>
        <div className='badges'>
          <img src={reactIcon} alt="" />
          <p>React</p>
        </div>
        <div className='badges'>
          <img src={typescript} alt="" />
          <p>TypeScript</p>
        </div>
        <div className='badges'>
          <img src={gitIcon} alt="" />
          <p>Git</p>
        </div>
        <div className='badges'>
          <img src={githubIcon} alt="" />
          <p>GitHub</p>
        </div>
        <div className='badges'>
          <img src={wordpress} alt="" />
          <p>WordPress</p>
        </div>
        <div className='badges'>
          <img src={tailwind} alt="" />
          <p>TailWind</p>
        </div>
        <div className='badges'>
          <img src={vitejs} alt="" />
          <p>Vite.js</p>
        </div>
        <div className='badges'>
          <img src={jsIcon} alt="" />
          <p>JavaScript</p>
        </div>
        <div className='badges'>
          <img src={htmlIcon} alt="" />
          <p>HTML</p>
        </div>
        <div className='badges'>
          <img src={cssIcon} alt="" />
          <p>CSS</p>
        </div>
        <div className='badges'>
          <img src={rubyIcon} alt="" />
          <p>Ruby</p>
        </div>
        <div className='badges'>
          <img src={railsIcon} alt="" />
          <p>Rails</p>
        </div>
        <div className='badges'>
          <img src={figma} alt="" />
          <p>Figma</p>
        </div>
        <div className='badges'>
          <img src={bootstraptIcon} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className='badges'>
          <img src={materialui} alt="" />
          <p>Material UI</p>
        </div>
      </div>
    </div>
  )
}
