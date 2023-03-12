import React from 'react';

export default function portfolio({imageSrc, title, description, liveLink, codeLink}) {

  return (
        <div className='portfolio--card'>
          <img src={imageSrc} alt="" className='portfolio--img'/>
          <div className="portfolio--overlay">
            <div className="portfolio--info">
              <h4>{title}</h4>
              <p>{description}</p>
              <div className="portfolio--btn">
                <button><a href={liveLink} target="_blank"> <i class="fa-brands fa-internet-explorer"></i> Live Link</a></button>
                <button><a href={codeLink} target="_blank"> <i class="fa-brands fa-github"></i> Code Link</a></button>
              </div>
            </div>
          </div>
        </div>
  )
}
