import React from 'react';
import "./ImageScroller.css";
import pic1 from '../Images/pic-1.jpg';
import pic2 from '../Images/pic-2.jpg';
import pic3 from '../Images/pic-3.jpg';
import pic4 from '../Images/pic-4.jpg';
import pic5 from '../Images/pic-5.jpg';
import Carousel from 'react-bootstrap/Carousel';


function ImageScroller(){

    const images=[pic1, pic2 , pic3,pic4,pic5]
    const interval=2500
    
    return(
        <Carousel data-bs-theme="dark" indicators={false} controls={true}>
      <Carousel.Item interval={interval}>
        <div className='image-container'>
        <img
          className="image"
          src={images[3]}
          alt="First slide"
        />
        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={interval}>
        <img
          className="image"
          src={images[0]}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={interval}>
        <img
          className="image"
          src={images[4]}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    )
}

export default ImageScroller;