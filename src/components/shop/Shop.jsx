import React from 'react'
import './Shop.css'
import ProductCard from '../product/ProductCard'
import IMG1 from '../../images/cup.png'
import IMG2 from '../../images/disc.png'
import IMG3 from '../../images/panty.jpg'
import IMG4 from '../../images/patch.jpeg'

function Shop() {
  return (
    <div className='shop'>
      {/* <img src={green} alt="" /> */}
      
      <div className="shop__container">

        <div className="shop__header">
          {/* <h1>
            to go with your flow <br />
          </h1> */}
        </div>

        <div className='shop__row'>
          <ProductCard 
            id="1"
            title="Menstrual Cup"
            price={50000}
            image={IMG1}
            desc={(
              <p>100% medical-grade silicone <br />
            Soft and flexible enough for easy insertion <br />
            Firm rim that pops open and creates a leak-free seal <br />
            Capacity of 2-3 pads</p>
            )}
          />

          <ProductCard 
            id="3"
            title="Menstrual Underwear"
            price={50000}
            image={IMG3} 
            desc={(
              <p>Absorbent, breathable, hygienic and antibacterial <br />
            Recommended for light flow and for the last days of your period <br />
            Wash by hand or washing machine in cold water <br />
            </p>
            )}
          />
          <ProductCard 
            id="2"
            title="Menstrual Disc"
            price={60000}
            image={IMG2}
            desc={(
              <p>100% medical-grade silicone <br />
            Soft and flexible enough for easy insertion <br />
            Firm rim that keeps it in place and creates a leak-free & suction-free seal <br />
            Capacity of 3-4 pads</p>
            )}
          />

          <ProductCard 
            id="4"
            title="Heat Patches"
            price={15000}
            image={IMG4}
            desc={(
              <p> Single use heating patches <br />
            Made for menstrual cramps because nothing should cramp your style! <br />
            heat on the go <br />
            </p>
            )}
          />

          {/* <Product 
            id="6"
            title="Period Care Package"
            price={100000}
            image={}
          /> */}
        </div>

      </div>
    </div>
  )
}

export default Shop