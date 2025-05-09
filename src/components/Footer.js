import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; 
import './Footer.css'; 

function Footer() {
  return (
    
    <footer className="footer">
      
      <div className="footer-content">
      
        <p className='follow'>Follow us on social media</p>

        <div className="social-links">
          
          <a href="https://www.instagram.com/atriapodcastclub" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>

          <a href="https://www.youtube.com/@AtriaPodcastClub" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>

          <a href="https://www.linkedin.com/company/atria-podcast-club" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
