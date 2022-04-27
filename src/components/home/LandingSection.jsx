import React from 'react'
import './LandingSection.css'

import { Link } from 'react-router-dom'

function LandingSection() {
  return (
    <div className='landingSection__container'>
      
      <div className="landingSection__text">
        <div className="text-container">
          <div className="animation">
            <h2 className="line-1 anim-typewriter">
              experience your
              period better
            </h2>
          </div>
        </div>
        <Link to="/shop">
          <h2 className='btn btn-primary'>SHOP ALL</h2>
        </Link>
      </div>
    </div>
  )
}

export default LandingSection