import './Datacard.css'
import { useState } from 'react'

function Datacard({ sighting }) {

    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <>
                <div className="simpleStyle">
                    <div><img className="small-image" src={sighting.images} alt="user's" /> </div>
                    <div><h3>{new Date(sighting.date).toLocaleString('en-US').substring(0, 10)}</h3></div>
                    <div><h4>{sighting.species}</h4></div>
                </div>
                <hr/>
            </>
        )
    }

    const detailView = () => {
        return (
            <>
                <div className='detailStyle'>
                    <img className="large-image" src={sighting.images} alt="user's" />
                    <div className='detailed-info'>
                        <h2>{new Date(sighting.date).toLocaleString('en-US').substring(0, 10)}</h2>
                        <h3>Species: {sighting.species}</h3>
                        <h4>Sighting location: {sighting.location}</h4>
                    </div>
                    <div className='detailed-info'>
                        <h3 className='report'>Report:</h3>
                        {/* <p className='description'>{sighting.description}</p> */}
                        <textarea className='description' value={sighting.description}></textarea>
                    </div>

                </div>
                <hr/>
            </>
        )
    }

    return (
        <div onClick={() => setView(!view)}>
            {view ? detailView() : simpleView()}

        </div>
    )
}
export default Datacard