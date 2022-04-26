import React, {useState, useEffect} from 'react'
import "./Cart.css";
import CurrencyFormat from "react-currency-format";
import CartItem from './CartItem';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


function Cart({cart}) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    // const [discount, setDiscount] = useState('');

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const renderItems = () => {
        if (totalItems > 0) {
            return(
                cart.map((item) => (
                    <CartItem
                    key={item.id}
                    item={item}
                    />
                ))
            )
        } else {
            return(
                <p className='cart__none'>
                    You have no items in your shopping cart. 
                    <Link to='/shop'> Start adding some!</Link>
                </p>
            )
        }

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

    const renderTotal = () => (
        <div className="cart__total">
            <p className="cart__total-title"> Subtotal:</p>
            <p className="cart__total-price">
                <CurrencyFormat 
                    renderText={(value) =>(
                        <span>
                            
                            ({totalItems} items): <strong>{value}</strong>
                            
                        </span>
                    )}
                    decimalScale={2}
                    value={totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={'UGX'}
                />
            </p>
        </div>
    )

    return (
        <div className='cart'>
            <h4 className='cart__heading'>Your Shopping Cart</h4>
            { renderItems() }
            {/* { renderDiscount() } */}
            { renderTotal() }
            <div className="cart__footer">
                <Link to='/checkout'>
                    <button className="cart__btn-checkout btn">Proceed To Checkout</button> 
                </Link>
            </div>
        </div>
    )
            
        
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);