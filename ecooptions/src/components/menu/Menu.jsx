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
              <img src={logo} alt="" className='menu__logo' />
            </Link>
            <nav>
                <Link to="/shop" className='text'>
                    shop
                </Link>
                <Link to="/bundle" className='text'>
                    bundle
                </Link>
                <Link to="/about" className='text'>
                    About
                </Link>
                <Link to="/blog" className='text'>
                    blog
                </Link>
                <Link to="" className='text'>
                    quiz
                </Link>
            </nav>
            <div className="menu__icons">
                <Link to="/">
                    <AiOutlineSearch size={30} />
                </Link>
                <Link to="/contact">
                    <AiOutlineWechat size={30}  className="menu__iconsChat"/>
                </Link>
                <Link to='/checkout'>
                    <AiOutlineShoppingCart size={30} className="menu__iconsChat"/>
                </Link>
            </div>
        </div>
        <MobileMenu className="mobile__menu"/>
    </div>
  )
}

export default Menu