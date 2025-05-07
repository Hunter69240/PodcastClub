import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Importing icons
import './Footer.css'; // Make sure to import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='follow'>Follow us on social media</p>

        <div className="social-links">
          {/* Social Media Icons with Links */}
          <a href="https://www.instagram.com/atriapodcastclub" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>

          <a href="https://www.youtube.com/@AtriaPodcastClub" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>

          <a href="https://www.linkedin.com/in/aadish-d-somayaji-787b952a8" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
