import React from 'react'
import img from '../../images/about.jpg'

function AboutExtra() {
  return (
    <section className="about__img">
        <div className='landing__container'>
          <img src={img} alt="about" />
          <div className="landing__text">
            
          </div>
        </div>
    </section>
  )
}

export default AboutExtra