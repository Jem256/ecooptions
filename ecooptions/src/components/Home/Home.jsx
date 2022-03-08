import React from 'react'
import EssentialsSection from './EssentialsSection'
import LandingSection from './LandingSection'

function Home() {

  return (
    <div className='home__container'>
      <LandingSection/>
      <EssentialsSection/>
      
    </div>
  )
}

export default Home