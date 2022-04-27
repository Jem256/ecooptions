import React from 'react'
import './About.css'
import AboutContent from './AboutContent'
import AboutFounders from './AboutFounders'
import green from '../../images/white.jpg'

function About() {
  return (
    <div className="about">
      <img src={green} alt="" />
      <AboutContent/>
      <AboutFounders/>
    </div>
  )
}

export default About