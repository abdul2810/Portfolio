import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import PersonIcon from '@mui/icons-material/Person';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt='' />
                <p>Passionate about building dynamic web applications. Looking for opportunities to grow as a Full Stack Developer!</p>
            </div>

        <div className="footer-top-right">
            <div className="footer-email-input">
                <PersonIcon />
                <input type='email' placeholder='Enter your email...' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Abdul Razack | All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms and Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer