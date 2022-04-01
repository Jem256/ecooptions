import React from 'react'
import './CartItem.css'
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useStateValue } from "../../StateProvider";

function CartItem({id, image, title, price, rating, hideButton}) {
    const[{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='cart-item'>
            <img className='cart-item__image' src={image} alt='' />

            <div className='cart-item__details'>
                <p className='cart-item__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map(
                        (_, i) => (
                            <p><StarOutlineIcon/></p>
                        )
                    )}
                </div> */}
                {!hideButton && (
                    <button
                        type="button"
                        className="cart-item__remove btn"
                        onClick={removeFromBasket}
                    >
                        Remove
                    </button>
                )}
                
            </div>
        </div>
    )
}

export default CartItem