import React, { useState } from 'react'
import './CartItem.css'
import {RiDeleteBin6Line} from 'react-icons/ri'

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/shopping/shoppingActions";


function CartItem({item, adjustQty, removeFromCart}) {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };

    return (
        <div className='cart-item'>

            <div className="details">
                <img className='cart-item__image' src={item.image} alt={item.title} />
                <div className="cart-item__desc">
                    <p className='cart-item__details-title'>{item.title}</p>
                    <div className="remove">
                        <button
                            type="button"
                            className="cart-item__remove"
                            onClick={()=>removeFromCart(item.id)}
                        >
                            <RiDeleteBin6Line className='cart-item__removeIcon'/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="other">
                <div className="cart-item__details-qty more">
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />  
                </div>

                <p className='cart-item__details-price'>
                    <strong>UGX {item.price}</strong>
                </p>
            </div>


                
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);