import React from 'react'
import './Menu.css'
import logo from '../../images/logoEC.png'
import {AiOutlineWechat} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu__container">
        <div className="menu__long">
            <Link to='/' >
              <img src={logo} alt="" />
            </Link>
            <nav>
                <Link to="/shop">
                    shop
                </Link>
                <Link to="/bundle">
                    bundle
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/blog">
                    blog
                </Link>
                <Link to="">
                    quiz
                </Link>
            </nav>
            <div className="menu__icons">
                <a href=""><AiOutlineSearch size={30} /></a>
                <a href=""><AiOutlineWechat size={30}  className="menu__iconsChat"/></a>
                <a href=''><AiOutlineShoppingCart size={30} className="menu__iconsChat"/></a>
            </div>
        </div>
        <MobileMenu className="mobile__menu"/>
    </div>
  )
}

export default Menu