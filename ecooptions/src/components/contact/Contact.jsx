import React from 'react'
import './Contact.css'
import {FiPhoneCall} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import green from '../../images/green.jpg'

function Bundle() {
  return (
    <div className='contact'>
      <img src={green} alt="" />

      <div className="contact__container">
        <h2>Get In Touch</h2>
        <div className=" contact__talk">
          <div className="contact__icons">
            <FiPhoneCall/>
            <span>Call</span>
          </div>
          <div className="contact__icons">
            <MdOutlineMail/>
            <span>Email</span>
          </div>
          <div className="contact__icons">
            <BsWhatsapp/>
            <span>WhatsApp</span>
          </div>
          <div className="contact__icons">
            <RiMessengerLine/>
            <span>Messenger</span>
          </div>
      
        </div>

        <h2>Follow Us</h2>
        <div className="contact__follow">
          <div className="contact__icons">
            <IoLogoTwitter/>
            <span>Twitter</span>
          </div>
          <div className="contact__icons">
            <FaFacebookF/>
            <span>Facebook</span>
          </div>
          <div className="contact__icons">
            <FiInstagram/>
            <span>Instagram</span>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Bundle