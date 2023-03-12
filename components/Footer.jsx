import React, { useRef, useEffect } from 'react';

export default function Footer() {
  const buttonRef = useRef(null);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const mybutton = buttonRef.current;
    if (mybutton && (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)) {
      mybutton.style.display = "block";
    } else if (mybutton) {
      mybutton.style.display = "none";
    }
  }

  useEffect(() => {
    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className='footer'>
      <div className="footer--text">
        <h1>Contact Me</h1>
        <p>Feel free to email<br /> or reach out on LinkedIn or GitHub</p>
        <div className="footer--icons">
          <a href="https://www.linkedin.com/in/rafael-quintanilha/" target="_blank"><div className="polygon"><i class="fa-brands fa-linkedin-in"></i></div></a>
          <a href="https://github.com/RafaelQuintanilha18" target="_blank"><div className="polygon"><i class="fa-brands fa-github"></i></div></a>
          <a href="mailto:rafael.quintanilha18@gmail.com"><div className="polygon"><i class="fa-solid fa-envelope"></i></div></a>
        </div>
      </div>
      <img src="src/assets/footer-img.png" alt="" className="footer--triangle" />
      <button onClick={topFunction} ref={buttonRef} id="topBtn" title='Go to Top'><i class="fa-solid fa-arrow-up"></i></button>
    </div>
  );
}
