import React from 'react'
import './Newsletter.scss'
import {FaFacebookf , FaTwitter, FaInstagram, FaLinkedIn} from 'react-icons/fa'
export const Newsletter = () => {
  return (
    <div className='newsletter-section'>
        <div className="newsletter-content">
            <span className='small-text'>Newsletter</span>
            <span className="big-text">Sign up for latest updates</span>
            <div className="form">
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
