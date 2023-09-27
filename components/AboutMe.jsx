import React from 'react';
import { LightningCharge } from 'styled-icons/bootstrap';
import { ReactLogo, Trello } from 'styled-icons/boxicons-logos';
import { Code } from 'styled-icons/fa-solid';
import { Certificate } from 'styled-icons/fluentui-system-filled';
import { Education } from 'styled-icons/zondicons';

export default function aboutMe() {

  return (
    <div className='aboutme' >
      <div className="aboutme--title">
        <h1 id='aboutmeSection'>About Me</h1>
        <h2>About Me</h2>
      </div>



      <div className='aboutme--container'>

      <div>
        <h3>About me</h3>
        <p>Greetings! I'm a curious and proactive Front-end Developer with a strong focus on React and Agile practices.
            My journey in the world of technology has been shaped by hands-on experience in an exciting blend of IT, project management and web development that have shaped me into a well-rounded Front-end Developer.
        </p>
      </div>
      <div>
        <h3>What moves me</h3>
            <p>I found my passion for front-end development when I realized how much I cared for all the pixels, the
            aesthetics, and the little details when developing beautiful UI and projects. Through experience, I've learned that flexibility, mutual respect and teamwork are the keys to success, and I'm ready to contribute to projects that push the boundaries of what's possible.
            Let's connect and explore how I can contribute to your team. 😊</p>
      </div>

      </div>



      <div className='aboutme--container2'>
      <div>
          <h3>My Skill Set</h3>
            <li>
              <ul><ReactLogo size={20} color='aqua'/> <strong>React Devotee</strong>: React is at the heart of my development toolbox, is my go-to library for developing web and native user interfaces, applying it to real-world projects and continuously enhancing my skills.</ul>
              <ul><LightningCharge size={20} color='yellow'/> <strong>Agile Explorer</strong>: I'm no stranger to the Agile realm. Navigating Git workflows with ease, I've learned that flexibility and teamwork are the keys to successful project development.</ul>
              <ul><Trello size={20} color='dodgerblue'/> <strong>Project Whisperer</strong>: As a former Digital Project Manager, I've honed my skills in effective communication and project ownership. Leading teams, managing complex projects, and using tools like Jira and Trello are all in a day's work for me. </ul>
            </li>
        </div>

        <div>
          <h3>Learning Never Ends</h3>
            <li>
              <ul><Code size={20} color='tomato'/> <strong>Le Wagon Bootcamp / Continuous Learning</strong>: An intense full-stack web development program in Porto - Portugal, was my training ground. I mastered everything from HTML and CSS to Ruby on Rails and became a Figma devote. Now I am on a search to master React, TypeScript and Node.js</ul>
              <ul><Education size={20} color='lightseagreen'/>	<strong>Master's Degree in E-business</strong>: My academic voyage took me to Copenhagen Business School, where I delved into the digital landscape's intricate convergence of business, entrepreneurship and technology.</ul>
              <ul><Certificate size={20} color='mediumseagreen'/>	<strong>Bachelor's Degree in IT Management</strong>: My educational odyssey began at Instituto INFNET in Rio de Janeiro, Brazil, where I got a strong technical foundation, from Windows Server to database management, and introduced me the principles of effective project management.</ul>
            </li>
        </div>

        </div>





      </div>



  )
}
