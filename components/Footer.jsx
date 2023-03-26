import React, { useRef, useEffect } from 'react';
import footerImg from '../src/assets/footer-img.png'
import SocialMediaIcons from './SocialMediaIcons';

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
        <h1 id='contactSection'>Contact Me</h1>
        <p>Feel free to email<br /> or reach out on LinkedIn or GitHub</p>
          <SocialMediaIcons className="footer--icons"/>
      </div>
      <img src={footerImg} alt="" className="footer--triangle" />
      <button onClick={topFunction} ref={buttonRef} id="topBtn" title='Go to Top'><i class="fa-solid fa-arrow-up"></i></button>
    </div>
  );
}
