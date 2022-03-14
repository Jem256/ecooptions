import React from 'react'
import us from '../../images/asset5.jpg'
import './AboutFounders.css'

function AboutFounders() {
  return (
    <section className="about__foundersContainer">
        <div className="about__founders">
          <div className="founders">
            <div className="about__founders-image">
              <img src={us} alt="founders" />
            </div>
          </div>
          <div className="about__founders-header">
            <h3>THE FOUNDERS</h3>
            <h1>
              Jemimah Nagasha <br />
              & Olivia Winter
            </h1>
            
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font. 
              I'm a great place for you to tell a story and let your users know a little more about you.
            </p>

            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font. 
              I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutFounders