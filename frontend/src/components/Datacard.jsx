import React from 'react';

const Datacard = (props) => {
    return(
        <>
        <div className='whole-card'>
            <div className='col-one'>
                {/* <img src={props.item.images} alt={props.item.species}/> */}
                <h3>Species Spotted: </h3>
                <h3>Spotted by: name</h3>
            </div>
            <div className='col-two'>
                <h2>Date</h2>
                <h3>Time</h3>
                <h3>Location</h3>
                <div className='description '>
                    <h4>Report Account</h4>
                    <p>Story</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Datacard;