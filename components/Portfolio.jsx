import React from 'react';
import projects from './projects';
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {


  return (
    <div className='portfolio'>
      <div className="portfolio--title">
        <h1>Portfolio</h1>
        <h2>Portfolio</h2>
      </div>

      <div className="portfolio--container">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>

    </div>
  )
}
