import React from 'react';
import podcastLogo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ hideLogo }) {
    return (
      <>
        <header className="Header">
          <div className='header-left'>
            {!hideLogo && (
              <img alt='podcastlogo' src={podcastLogo} className='logo' />
            )}
            <p className="name">Atria Podcast Club</p>
          </div>
          <div className='Navigation'>
            <Link to="/Home" className="nav-link"><p>Home</p></Link>
            <Link to="/AboutUs" className="nav-link"><p>About Us</p></Link>
            <Link to="/Shows" className="nav-link"><p>Shows</p></Link>
            <Link to="/Contactus" className="nav-link"><p>Contact us</p></Link>
          </div>
        </header>
        <div className="line"></div>
      </>
    );
}

export default Header;
