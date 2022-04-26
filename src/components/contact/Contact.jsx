import React from 'react'
import './Contact.css'
import {FiPhoneCall} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import green from '../../images/white.jpg'

function Contact() {
  return (
    <div className='contact'>
      {/* <img src={green} alt="" /> */}

      <div className="contact__container">
        <h2>Get In Touch</h2>
        <div className=" contact__talk">
          <article className="contact__icons">
            <FiPhoneCall/>
            <a href='tel:+256-705-464-186' >Call</a>
          </article>
          
          <article className='contact__icons'  >
            <MdOutlineMail /> 
            <a href="mailto:support@ecooptionsug.com" target='_blank'>Email</a>
          </article>
            
          <article className="contact__icons">
            <BsWhatsapp/>
            <a href="https://wa.me/message/Z7GXRBF2SR37O1" target='_blank'>WhatsApp</a>
          </article>
          {/* <article className="contact__icons">
            <RiMessengerLine/>
            <a href="https://m.me/jemimah.nagasha" target='_blank'>Messenger</a>
          </article> */}
      
        </div>

        <h2>Follow Us</h2>
        <div className="contact__follow">
          <article className="contact__icons">
            <IoLogoTwitter/>
            <a href='https://twitter.com/EcoOptions_' target='_blank' >Twitter</a>
          </article>
          <article className="contact__icons">
            <FaFacebookF/>
            <a href='https://www.facebook.com/EcoOptions/' target='_blank'>Facebook</a>
          </article>
          <article className="contact__icons">
            <FiInstagram/>
            <a href='https://instagram.com/ecooptions_?igshid=YmMyMTA2M2Y=' target='_blank'>Instagram</a>
          </article>
        </div>

        <h2>Address</h2>
        <p className='contact__follow'>Nakibinge Road, Namungoona, Kampala</p>
        
      </div>

    </div>
  )
}

export default Contact