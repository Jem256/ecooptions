import React from 'react'
import './LandingSection.css'
import home1 from '../../images/home1.jpg'
import { Link } from 'react-router-dom'

function LandingSection() {
  return (
    <div className='landingSection__container'>
        <img src={home1} alt="" />
        <div className="landingSection__text">
          <h1>
          experience your <br />
          period better
          </h1>
          <h2> friendly hygiene products</h2>
          <Link to="/shop">
            <h2 className='btn btn-primary'>shop all</h2>
          </Link>
        </div>
      </div>
  )
}

export default LandingSection