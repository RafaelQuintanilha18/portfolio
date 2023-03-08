import React from 'react';

export default function footer() {
  return (
    <div className='footer'>
      <div className="footer--text">
        <h1>Contact Me</h1>
        <p>Feel free to email<br /> or reach out on LinkedIn or GitHub</p>
        <div className="footer--icons">
          <div className="polygon"><i class="fa-solid fa-envelope"></i></div>
          <div className="polygon"><i class="fa-brands fa-linkedin-in"></i></div>
          <div className="polygon"><i class="fa-brands fa-github"></i></div>
        </div>
      </div>
      <img src="src/assets/footer-img.png" alt="" className="footer--triangle" />
    </div>
  )
}
