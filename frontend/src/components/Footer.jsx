import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer-text">
            <p className='copyright'>
                &copy; {new Date().getFullYear()} | Squatch Watch Inc. | All rights reserved
            </p>
        </div>
        <div className='scrolling-image-container'>
            <div className='bottom-image'>
                <div className="top-image"></div>
            </div>

            
        </div>
        </>
    )
}

export default Footer;