import React from 'react'
import './MobileMenu.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineWechat} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function MobileMenu() {
  return (
    <div className="mobileMenu">
      <div className="mobileMenu__container">
        <div className="mobileMenu__item">
          <Link to="/">
            <AiOutlineHome/>
            <span>Home</span>
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link to="/shop">
            <AiOutlineShoppingCart/>
            <span>Shop</span>
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link to="/about">
            <AiOutlineWechat/>
            <span>About</span>
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link to="/contact">
            <BiMessageSquareDetail/>
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu