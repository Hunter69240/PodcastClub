import React from "react";
import './Aboutuscard.css';

import { FaInstagram } from "react-icons/fa";

export default function Aboutuscard({Name,Quote,Team,InstaLink,Desc,Image}) {
    return (
        <div className="Card">
            <div className="Card-Inner">
                
                <div className="Card-Front">
                    <div className="img-container">
                        <img src={Image} alt="images" className="profile-image" />
                    </div>
                    <h4 className="Name">{Name}</h4>
                    <h5 className="Quote">{Quote}</h5>
                    <h5 className="Team">{Team} </h5>
                    
                </div>

                
                <div className="Card-Back">
                    <h4 className="Name">Back Side</h4>
                    <h5 className="Quote">{Desc}</h5>
                    
                    <a href={InstaLink}  className="Insta"><FaInstagram /></a>
                </div>
            </div>
        </div>
    );
}
