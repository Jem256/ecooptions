import React from 'react'
import './EssentialsSection.css'
import IMG1 from '../../images/asset1.jpg'
import IMG3 from '../../images/asset3.jpg'

function EssentialsSection() {

    const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Eco Menstrual Cup' 
    },
    {
      id: 2,
      image: IMG1,
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
                    <img src={image} alt={title} />
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