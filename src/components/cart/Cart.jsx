import React from 'react'
import "./Cart.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import CartItem from './CartItem';
import { Link } from 'react-router-dom'


function Cart() {
    const [{basket}, dispatch] = useStateValue();

    const emptyCart = () => {
        dispatch({
            type: 'EMPTY_BASKET',
            basket: basket,
        })
    }

    const renderEmptyMessage = () => {
        if (basket.length > 0) {
            return;
        }

        return(
            <p className='cart__none'>
                You have no items in your shopping cart. 
                <Link to='/shop'> Start adding some!</Link>
            </p>
        )
    }

    const renderItems = () => (
        basket.map(item => (
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
        ))
    )

    const coupon = () => {
        
    }

    
    const renderDiscount = () => (
        <div className="cart__total">
            <p className="cart__total-title"> Dicount Code:</p>
            <form>
                <input 
                className='cart__discount'
                name="discount"
                placeholder="Enter Dicount Code"
                type="text"
                />
                <button type='submit' className="cart__btn-checkout btn">Apply</button>
            </form>
        </div>
    )

    
    const finalPrice = () => {
        if (renderDiscount()) {
            return(
                <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            ({basket.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)*0.95}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'UGX'}
                />
                )
            }
            
            return(
                <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            ({basket.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'UGX'}
                />
            )
        }
        
        const renderTotal = () => (
            <div className="cart__total">
                <p className="cart__total-title"> Subtotal:</p>
                <p className="cart__total-price">
                    {finalPrice()}
                </p>
            </div>
        )
        
        return (
        <div className='cart'>
            <h4 className='cart__heading'>Your Shopping Cart</h4>
            { renderEmptyMessage() }
            { renderItems() }
            { renderDiscount() }
            { renderTotal() }
            <div className="cart__footer">
                <button className="cart__btn-empty btn" onClick={emptyCart}>Empty cart</button>
                <Link to='/checkout'>
                    <button className="cart__btn-checkout btn">Checkout</button> 
                </Link>
            </div>
        </div>
    )
}

export default Cart