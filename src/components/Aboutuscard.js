import React from "react";
import './Aboutuscard.css';
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Aboutuscard({
    Name,
    Quote,
    Team,
    InstaLink,
    Desc,
    Image,
    showJoinLink = false,
    disableFlip = false
}) {
    return (
        <div className={`Card ${disableFlip ? 'no-flip' : ''}`}>
            <div className="Card-Inner">

                <div className="Card-Front">
                    <div className="img-container">
                        <img src={Image} alt="images" className="profile-image" />
                    </div>
                    <h4 className="Name">{Name}</h4>
                    <h5 className="Team">{Team}</h5>
                    <h5
                        className="Quote"
                        dangerouslySetInnerHTML={{ __html: Quote.replace(/\n/g, '<br/>') }}
                    ></h5>
                    

                    {showJoinLink && (
                        <Link to="/contactus" className="Contact">
                             Join Us
                        </Link>
                    )}
                </div>

                <div className="Card-Back">
                    <h4 className="Name">Back Side</h4>
                    <h5 className="Quote">{Desc}</h5>
                    <a
                        href={InstaLink}
                        className="Insta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </div>

            </div>
        </div>
    );
}
