import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className='navbar'>
      <img src={logo} alt='' className='nav-logo' />

      {/* Hamburger Icon */}
      {!isMenuOpen && (
        <MenuOpenIcon 
          onClick={() => setIsMenuOpen(true)} 
          className='nav-mob-open' 
          style={{ fontSize: 35 }} 
        />
      )}

      {/* Desktop Menu */}
      <ul className='nav-menu-desktop'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <AnchorLink className='anchor-link' offset={50} href={item.href}>
              {item.label}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="nav-menu-mobile open">
          <CloseIcon
            onClick={() => setIsMenuOpen(false)}
            className="nav-mob-close"
            style={{ fontSize: 35 }}
          />
          {menuItems.map((item, index) => (
            <li key={index}>
              <AnchorLink className='anchor-link' offset={50} href={item.href}>
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
      )}

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
