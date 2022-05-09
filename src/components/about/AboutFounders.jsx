import React from 'react'
import us from '../../images/IMG_US.JPG'
import './AboutFounders.css'
import {Link} from 'react-router-dom'

function AboutFounders() {
  return (
    <section className="about__foundersContainer">
        <div className="about__founders">
          <div className="founders">
            <div className="about__founders-image">
              <img src={us} alt="founders" width={200} height={400} />
            </div>
          </div>
          <div className="about__founders-header">
            <h3>THE FOUNDERS</h3>
            <h1>
              Jemimah Nagasha <br />
              & Olivia Winter
            </h1>
            <strong>Our Story</strong>
            
            <p>
              This is the Eco Options story. <br />
              It begins with Jemimah, our Founder. 
            </p>

            <p>
              Eco Options began with a conversation Jemimah had with a friend 
              about the discomfort of pads and how her monthly expenditure on periods was taking 
              a toll on her finances during the covid lockdown. The friend introduced her to 
              menstrual cups and 3 months after using one, she was mindblown! Why wasn't every menstruator
              in Uganda using this?! 
            </p>

            <p>
              After doing extensive research about it, Jemimah and Olivia co-founded Eco Options  
              to ease the financial burden of menstruating for fellow women especially those in Uganda.
              With our sustainable options, the average ugandan woman is able to save upto 95% of the 
              total amount she spends on disposable pads in a year!
              Notwithstanding the comfort and time saved and the positive impact of our products
              for the environment. With our work, we hope to interest more menstruators in our Eco Options. 
            </p>

            <p>
              Browse our <Link to='/shop' className='link'>catalogue</Link> to find out what we have to Offer
            </p>
            
          </div>
        </div>
      </section>
  )
}

export default AboutFounders