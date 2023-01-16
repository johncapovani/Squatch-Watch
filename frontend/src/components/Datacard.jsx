import './Datacard.css'
import { useState } from 'react'

function Datacard({ sighting }) {

    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
           
                <div className="simpleStyle">
                    <img src={sighting.images} alt="user's" /> 
                    <h3>{new Date(sighting.date).toLocaleString('en-US').substring(0,10)}</h3>
                    <h4>{sighting.species}</h4>
                </div>
            
        )
    }

    const detailView = () => {
        return (
            
                <div className='detailStyle'>
                    <h2>{new Date(sighting.date).toLocaleString('en-US').substring(0,10)}</h2>
                    <h3>{sighting.species}</h3>
                    <h4>{sighting.time}</h4>
                    <h4>{sighting.description}</h4>
                </div>
           
        )
    }

    return (
        <div onClick={() => setView(!view)}>
            {view ? simpleView() : detailView()}
            <hr></hr>
        </div>
    )
}
export default Datacard