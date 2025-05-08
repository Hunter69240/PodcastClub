import React ,{useEffect,useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoDisplay from '../components/VideoDisplay';
import './Shows.css';

function Shows() {

    const [videoURL,SetvideoURL]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/videos')
        .then(response=>response.json())
        .then(data=>SetvideoURL(data))
        .catch(error =>console.error("Error",error));
    },[]);
    return (
        <div className='Container'>
            <Header/>
            {videoURL.map((video,index)=>(
                <VideoDisplay
                key={index}
                title={video.title}
                description={video.description}
                videoUrl={video.youtubeLink}
                spotifyLink={video.spotifyLink}
                />
            ))}
           
            <Footer/>
        </div>
    )
}

export default Shows;