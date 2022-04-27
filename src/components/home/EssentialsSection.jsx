import React from 'react'
import './EssentialsSection.css'
import IMG1 from '../../images/cup.png'
import IMG2 from '../../images/disc.png'
import IMG3 from '../../images/panty.jpg'
import {Link} from 'react-router-dom'

function EssentialsSection() {

    const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Eco Menstrual Cup' 
    },
    {
      id: 2,
      image: IMG2,
      title: 'Eco Menstrual Disc' 
    },
    {
      id: 3,
      image: IMG3,
      title: 'Eco Menstrual Undies' 
    }
  ]
  return (
    <section className="home__essentials">
        <h5>our essentials</h5>
        <h2>
          No Plastic.
          Period.
        </h2>

        <div className="container essentials__container">
            {
            data.map(({id, image, title}) => {
                return(
                <article key={id} className="essentials__item">
                  <div className="essentials__item-imgcard">
                    <div className="essentials__item-image">
                      <Link to='/shop'>
                        <img src={image} alt={title} />
                      </Link>
                    </div>
                  </div>
                  <h3>{title}</h3>
                </article>
                )
            })
            }
        </div>
    </section>
  )
}

export default EssentialsSection