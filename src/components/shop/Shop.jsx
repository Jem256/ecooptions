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
            price={50}
            image={IMG1}
          />

          <ProductCard 
            id="2"
            title="Menstrual Disc"
            price={50000}
            image={IMG2}
          />
          <ProductCard 
            id="3"
            title="Menstrual Underwear"
            price={50000}
            image={IMG3} 
          />

          <ProductCard 
            id="4"
            title="Heat Patches"
            price={15000}
            image={IMG4}
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