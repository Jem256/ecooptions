import React, {useState, useEffect} from 'react'
import './Menu.css'
import logo from '../../images/logoEC.png'
import {MdOutlineShoppingBag} from 'react-icons/md'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { getAnalytics, logEvent } from "firebase/analytics";


function Menu({cart}) {
    const [cartCount, setCartCount] = useState(0);
    // Log event
    const analytics = getAnalytics();
    logEvent(analytics, 'select_item', Link);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

  return (
    <div className="menu__container">
        <div className="menu__long">
            <Link to='/' >
              <img src={logo} alt="" className='menu__logo' />
            </Link>
            <nav>
                <Link to="/" className='text'>
                    home
                </Link>
                <Link to="/shop" className='text'>
                    shop
                </Link>
                <Link to="/faqs" className='text'>
                    FAQs
                </Link>
                <Link to="/about" className='text'>
                    About
                </Link>
                <Link to="/contact" className='text'>
                    contact
                </Link>
            </nav>
            <div className="menu__icons">
                {/* <Link to="/">
                    <AiOutlineSearch className='menu__search' />
                </Link> */}
                
                <Link to='/cart'>
                    <div className="menu__basket menu__icons">
                        <MdOutlineShoppingBag />
                        <span className="menu__basketCount">
                            {cartCount}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
        <MobileMenu className="mobile__menu"/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Menu);