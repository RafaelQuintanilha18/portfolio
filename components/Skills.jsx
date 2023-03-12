import React from 'react';

export default function skills() {
  return (
    <div className='skills'>
      <div className="skills--title">
        <h1>Skills</h1>
        <h2>Skills</h2>
      </div>
      <div className='skills--badges'>
        <div className='badges'>
          <img src="src/assets/reactjs.png" alt="" />
          <p>React</p>
        </div>
        <div className='badges'>
          <img src="src/assets/git.png" alt="" />
          <p>Git</p>
        </div>
        <div className='badges'>
          <img src="src/assets/gitlab.png" alt="" />
          <p>GitHub</p>
        </div>
        <div className='badges'>
          <img src="src/assets/js.png" alt="" />
          <p>JavaScript</p>
        </div>
        <div className='badges'>
          <img src="src/assets/bootstrap5.png" alt="" />
          <p>Bootstrap</p>
        </div>
      </div>

      <div className='skills--badges lastrow'>
        <div className='badges'>
          <img src="src/assets/html5.png" alt="" />
          <p>HTML</p>
        </div>
        <div className='badges'>
          <img src="src/assets/css.png" alt="" />
          <p>CSS</p>
        </div>
        <div className='badges'>
          <img src="src/assets/ruby.png" alt="" />
          <p>Ruby</p>
        </div>
        <div className='badges'>
          <img src="src/assets/rails.png" alt="" />
          <p>Rails</p>
        </div>
        <div className='badges'>
          <img src="src/assets/mysql.png" alt="" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
  )
}
