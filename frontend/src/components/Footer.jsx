import React from 'react';
import './Footer.css'
import {
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer'>
        <div className="footer-text">
            <p className='icons'>
                <b>Contact Us</b> <FontAwesomeIcon icon={faInstagram}/>     <FontAwesomeIcon icon={faTwitter}/>   <FontAwesomeIcon icon={faFacebook}/>
            </p>
            <p className='copyright'>
                &copy; {new Date().getFullYear()} | Squatch Watch Inc. | All rights reserved
            </p>
        </div>
        <div className='scrolling-image-container'>
            <div className='bottom-image'>
                <div className="top-image"></div>
            </div>

            
        </div>
        </div>
    )
}

export default Footer;