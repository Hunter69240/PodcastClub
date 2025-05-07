import React , {useState} from 'react';
import "./ImageScroller.css";
import pic1 from '../Images/pic-1.jpg';
import pic2 from '../Images/pic-2.jpg';
import pic3 from '../Images/pic-3.jpg';
import pic4 from '../Images/pic-4.jpg';
import pic5 from '../Images/pic-5.jpg';
import Carousel from 'react-bootstrap/Carousel';


function ImageScroller(){

    const images=[pic1, pic2 , pic3,pic4,pic5]

    const [currentIndex,SetCurrentIndex]=useState(0)

    const nextImage=()=> {
        SetCurrentIndex((prevIndex)=>(prevIndex+1)%images.length)
    }

    const prevImage =()=>{
        SetCurrentIndex((prevIndex)=>(prevIndex-1 +images.length)%images.length)
    }
    return(
        <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
        <div className='image-container'>
        <img
          className="image"
          src={images[0]}
          alt="First slide"
        />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={images[3]}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
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