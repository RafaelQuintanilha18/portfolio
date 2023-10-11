import React from 'react';

export default function portfolio({imageSrc, title, description, liveLink, codeLink}) {

  const isVideo = liveLink.endsWith('.mp4');

  return (
        <div className='portfolio--card'>
          <img src={imageSrc} alt="" className='portfolio--img'/>
          <div className="portfolio--overlay">
            <div className="portfolio--info">
              <h4>{title}</h4>
              <p>{description}</p>
              <div className="portfolio--btn-container">
                {isVideo ?
                  (<button className='portfolio--btn' onClick={() => window.open('/NLWAI.mp4', '_blank')}>
                    <span><i className="fa-solid fa-video"></i> Video</span>
                  </button>) :
                  <button className='portfolio--btn'>
                    <a href={liveLink} target="_blank"> <span><i class="fa-brands fa-internet-explorer"></i> Live</span></a>
                  </button>
                }
                <button className='portfolio--btn'><a href={codeLink} target="_blank"> <span><i class="fa-brands fa-github"></i> Code</span></a></button>
              </div>
            </div>
          </div>
        </div>
  )
}
