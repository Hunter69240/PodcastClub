import React from 'react';
import './Home.css';
import ImageScroller from '../components/ImageScroller';
import Footer from '../components/Footer';
import Header from '../components/Header';
function Home() {
  return (
    <div className="Container">
        <Header/>
        <ImageScroller/>
        <Footer/>
    </div>
  );
}

export default Home;
