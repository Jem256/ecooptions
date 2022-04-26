import React from 'react'
import EssentialsSection from './EssentialsSection'
import HomeAbout from './HomeAbout'
import LandingSection from './LandingSection'
import home from '../../images/white.jpg'
import './Home.css'

function Home() {

  return (
    <div className='home__container'>
      <img src={home} alt="" />
      <LandingSection/>
      <EssentialsSection/>
      <HomeAbout/>
    </div>
  )
}

export default Home