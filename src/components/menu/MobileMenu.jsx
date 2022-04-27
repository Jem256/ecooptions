import React from 'react'
import './MobileMenu.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineWechat} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
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
          <Link to="/faqs">
            <AiOutlineQuestionCircle/>
            <span>FAQs</span>
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link to="/about">
            <AiOutlineMessage/>
            <span>About</span>
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link to="/contact">
            <AiOutlineWechat/>
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu