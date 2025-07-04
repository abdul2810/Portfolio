import React from 'react'
import './Hero.css'
import profile_image from '../../assets//profile_image.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_image} alt="" />
        <h1>I'm <span>Abdul Razack M</span></h1>
        <p>Full Stack developer from India</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero