import React from 'react'
import './Footer.css'
import logo from '../../images/logoEC.png'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


function Footer() {
  return (
    <footer>

      <div className="footer__details">
        <ul className="permalinks">
          <h2>OUR STORY</h2>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <ul className="permalinks">
          <h2>HELP</h2>
          <li><Link to="/about">FAQ</Link></li>
          <li><Link to="/shop">Quiz</Link></li>
          <li><Link to="/blog">Refund and Returns Policy</Link></li>
        </ul>
        <ul className="permalinks subscribe">
          <h2>JOIN THE FLOW</h2>
          <h3>Subscribe to our Mailing List!</h3>
          <div className="footer__mail">
            <input className='btn' type="email" placeholder='Enter Your Email Address' />
            <h3 className='btn btn-primary'>Sign Up</h3>
          </div>
        </ul>
      </div>


      <div className="footer__copyright">
        <Link to='/' >
          <img src={logo} alt="" className='menu__logo' />
        </Link>
        <div className="footer__socials">
          <a to="https://facebook.com"><FaFacebookF/></a>
          <a to="https://instagram.com"><FiInstagram/></a>
          <a to="https://twitter.com"><IoLogoTwitter/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer