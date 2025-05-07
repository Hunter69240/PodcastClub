import React from 'react';
import podcastLogo from '../Images/logo.jpeg';
import './Home.css';
import ImageScroller from '../components/ImageScroller';
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Home() {
  return (
    <div className="Container">
        <div className="Header">
          
          <img alt='podcastlogo' src={podcastLogo} className='logo'/>
          <p className="name">Atria Podcast Club</p>
          <Link to="/AboutUs" className='aboutus'>About us </Link>
        </div>

        <div className="line"></div>

        <div className='Body'>
          <div className='Navigation'>
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/Home" className="nav-link">Episodes</Link>
            <Link to="/Home" className="nav-link">3</Link>
            <Link to="/Home" className="nav-link">4</Link>
          </div>

          <ImageScroller/>

          <div className="bottom-line"></div>
        </div>

        <Footer/>
    </div>
  );
}

export default Home;
