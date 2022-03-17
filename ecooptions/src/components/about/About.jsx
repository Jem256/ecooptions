import React from 'react'
import './About.css'
import AboutContent from './AboutContent'
import AboutFounders from './AboutFounders'

function About() {
  return (
    <div className="about__container">
      <AboutContent/>
      <AboutFounders/>
    </div>
  )
}

export default About