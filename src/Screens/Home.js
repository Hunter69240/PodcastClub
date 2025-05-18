import React, { useState, useEffect } from 'react';
import './Home.css';
import ImageScroller from '../components/ImageScroller';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import logo from '../Images/logo.jpeg';

function Home() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("seenLogo");
    if (seen) {
      setAnimationDone(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("seenLogo", "true");
    setAnimationDone(true);
  };

  return (
    <div className="Container">
      {!animationDone && (
        <>
        
          <div className="animation-overlay" />
          
         
          <motion.div
            className="logo-animation-container"
            initial={{
              scale: 3,
              x: '-50%',
              y: '-50%',
              top: '50%',
              left: '50%',
              rotate: 0,
            }}
            animate={{
              scale: 1,
              x: 0,
              y: 0,
              top: '20px',
              left: '20px',
              rotate: 720, 
            }}
            transition={{ 
              duration: 2, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.5,
              rotate: {
                duration: 2,
                ease: "linear" 
              }
            }}
            onAnimationComplete={handleComplete}
          >
            <img src={logo} alt="Logo" className="intro-logo" />
          </motion.div>
        </>
      )}

      <Header hideLogo={!animationDone} />
      {animationDone && (
        <>
          <ImageScroller />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;