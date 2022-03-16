import React from 'react'
import './Shop.css'
import Product from '../product/Product'
import IMG1 from '../../images/asset1.jpg'
import IMG3 from '../../images/asset3.jpg'

function Shop() {
  return (
    <div className='shop'>

      <div className="shop__container">

        <div className="shop__header">
          <h1>Products</h1>
        </div>

        <div className='shop__row'>
          <Product 
            id="12321341"
            title="Eco Menstrual Cup"
            price={11000}
            rating={5}
            image={IMG1} 
          />

          <Product 
            id="49538094"
            title="Eco Menstrual Underwear"
            price={10000}
            rating={4}
            image={IMG3}
          />
          <Product 
            id="12321341"
            title="Eco Menstrual Cup"
            price={11000}
            rating={5}
            image={IMG1} 
          />

          <Product 
            id="49538094"
            title="Eco Menstrual Underwear"
            price={239.0}
            rating={4}
            image={IMG3}
          />
          <Product 
            id="12321341"
            title="Eco Menstrual Cup"
            price={11.96}
            rating={5}
            image={IMG1} 
          />
          <Product 
            id="49538094"
            title="Eco Menstrual Underwear"
            price={239.0}
            rating={4}
            image={IMG3}
          />
        </div>

      </div>
    </div>
  )
}

export default Shop