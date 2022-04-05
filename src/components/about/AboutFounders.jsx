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
              After doing some research about it, she opened Eco Options for business, providing quality 
              menstrual cups to Ugandan menstruators. But the work proved to be an uphill task. So.... What 
              is better than running your passion project alone? Exactly! Run it with your bestie!  
            </p>

            <p>
              Winter, our co-founder, has since joined the team and we have grown from being not only about 
              menstrual cups but also championing all forms of sustainable menstrual products.
            </p>

            <p>
              Browse our catalogue to find out what we have to <Link to='/shop'>Offer</Link>
            </p>
            
          </div>
        </div>
      </section>
  )
}

export default AboutFounders