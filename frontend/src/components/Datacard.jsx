import React from 'react';

const Datacard = (props) => {
    return(
        <div className='whole-card'>
            <div className='col-one'>
                <img src={props.item.images} alt={props.item.species}/>
                <h3>Species Spotted: {props.item.species}</h3>
                <h3>Spotted by: {props.item.user}</h3>
            </div>
            <div className='col-two'>
                <h2>{props.item.date}</h2>
                <h3>{props.item.time}</h3>
                <h3>Location: {props.item.location}</h3>
                <div className='description '>
                    <h4>Report Account</h4>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Datacard;