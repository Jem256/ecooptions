import React from 'react'
import './Product.css'
import {BsDash} from 'react-icons/bs'
import { useStateValue } from "../../StateProvider"

function Product({title, image, price, rating, id}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

  return (
    <div className='product'>
        
        <img className='product__img' src={image} width={400} height={400} alt="" />
        
        <div className="product__info">
            <em className='product__title'>{title} </em>
            <p className="product__price">
                <strong> UGX </strong>
                <strong>{price}</strong>
            </p>
        </div>
        {/* <div className="product__rating">
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <p><AiOutlineStar/></p>
                ))}
        </div> */}
        <button className='btn btn-primary' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product