import React from 'react'
import EssentialsSection from './EssentialsSection'
import HomeAbout from './HomeAbout'
import LandingSection from './LandingSection'
import './Home.css'

function Home() {

  return (
    <div className='home__container'>
      <LandingSection/>
      <EssentialsSection/>
      <HomeAbout/>
    </div>
  )
}

export default Home