import React from 'react';
import './Home.css';
import ImageScroller from '../components/ImageScroller';
import Footer from '../components/Footer';
import Header from '../components/Header';
import logo from '../Images/logo.jpeg'
function Home() {
  return (
    <div className="Container">
        <Header/>
        
        <ImageScroller/>

        <a className='chat' href='/'><img src={logo} alt='podcast logo'></img></a>
        <Footer/>
    </div>
  );
}

export default Home;
