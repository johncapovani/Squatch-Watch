import React from 'react';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <h3>This is the footer.</h3>
            </div>
            <br />
            <p className='copyright'>
                &copy; {new Date().getFullYear()} | Squatch Watch Inc. | All rights reserved
            </p>
        </div>
    )
}

export default Footer;