import React from 'react';

export default function socialMediaIcons(props) {
  return (
    <div className={props.className}>
      <a href="https://www.linkedin.com/in/rafael-quintanilha/" target="_blank"><div className="polygon"><i class="fa-brands fa-linkedin-in"></i></div></a>
      <a href="https://github.com/RafaelQuintanilha18" target="_blank"><div className="polygon"><i class="fa-brands fa-github"></i></div></a>
      <a href="mailto:rafael.quintanilha18@gmail.com"><div className="polygon"><i class="fa-solid fa-envelope"></i></div></a>
    </div>
  )
}
