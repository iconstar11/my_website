import React from 'react'
import './Footer.css'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h2>Let’s Connect Here</h2>

          <SocialLinks />
          <p>
            Feel free to connect with me on the above social media platforms.
            I'm here to engage, collaborate, and share exciting ideas!
          </p>
          <p className='logo'>Cate</p>
        </div>
        <div className='footer-right'>
          <div className='footer-contact'>
            <h4>Contact</h4>
            <p>
              Phone: <a href='tel:+447301694454'>+44 7301 694 454</a>
            </p>
            <p>
              <a href='mailto:wanjirucatherine805@gmail.com'>wanjirucatherine805@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
