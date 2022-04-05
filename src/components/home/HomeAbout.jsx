import React from 'react'
import './HomeAbout.css'
import us from '../../images/IMG_about1.jpg'
import {Link} from 'react-router-dom'

function HomeAbout() {
  return (
    <section className='home__about'>
        <h5>about us</h5>
        <h2>Get to know Us</h2>

        <div className="container home__aboutContainer">
            <div className="home__aboutUs">
                <div className="home__aboutUs-image">
                    <img src={us} alt="Founders" />
                </div>
            </div>

            <div className="home__aboutContent">
                <p>
                    Eco Options is a social enterprise that was birthed from the need to revolutionize
                    menstrual care in Uganda.
                </p>

                <Link to='/about' className='story btn btn-primary'>
                    Our Story
                </Link>
            </div>

        </div>
    </section>
  )
}

export default HomeAbout