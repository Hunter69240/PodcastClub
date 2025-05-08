import React from 'react';
import ReactPlayer from 'react-player';
import './VideoDisplay.css'
import { FaSpotify, FaYoutube } from 'react-icons/fa';
export default function VideoDisplay({title,description,videoUrl,spotifyLink}){
    return (
        <>
            <div className='VideoCard'> 
            <ReactPlayer url={videoUrl} className='Player' height={'350px'} width={'40%'} controls={true}/>
            <div className='VideoText'>
                <h1 className='title'>{title}</h1>
                <h5 className='description'>{description}
                </h5>

                <a href={spotifyLink} target="_blank" rel="noopener noreferrer" className='link'>
                            <FaSpotify size={30} color='green'/>
                </a>
                
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className='link'>
                            <FaYoutube size={30} color='red'/>
                </a>
            </div>
            </div>

            
        </>
    )
}