import React from 'react';

export default function portfolio({imageSrc, title, description, liveLink, codeLink}) {

  return (
        <div className='portfolio--card'>
          <img src={imageSrc} alt="" className='portfolio--img'/>
          <div className="portfolio--overlay">
            <div className="portfolio--info">
              <h4>{title}</h4>
              <p>{description}</p>
              <div className="portfolio--btn-container">
                <button className='portfolio--btn'><a href={liveLink} target="_blank"> <span><i class="fa-brands fa-internet-explorer"></i> Live Link</span></a></button>
                <button className='portfolio--btn'><a href={codeLink} target="_blank"> <span><i class="fa-brands fa-github"></i> Code Link</span></a></button>
              </div>
            </div>
          </div>
        </div>
  )
}
