import React from 'react'
import './Shop.css'
import ProductCard from '../product/ProductCard'
// Redux
import { connect } from "react-redux";

function Shop({products}) {
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
          {products.map((product) =>(
            <ProductCard key={product.id} product={product} />
          ))}
          
        </div>

      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);