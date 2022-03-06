import React from 'react'
import './MobileMenu.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineWechat} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function MobileMenu() {
  return (
    <div className="mobileMenu__container">
      <Link to="/"><AiOutlineHome/></Link>
      <Link to="/shop"><AiOutlineShoppingCart/></Link>
      <Link to="/about"><AiOutlineWechat/></Link>
      <Link to="/blog"><BiMessageSquareDetail/></Link>
    </div>
  )
}

export default MobileMenu