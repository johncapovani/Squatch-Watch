// import { sightingsSlice } from '../features/sightings/sightingSlice'
import './SightingItem.css'

function SightingItem({ sighting }) {

    return (
        <>



            <li className="card">
                <div>
                    <img src={sighting.images} alt="" className='data-cardimage' />
                    <h3 className="card-title">Spotted {sighting.species}</h3>

                    <p>{sighting.description}</p>
                    <button className='viewreport'>View Report</button>
                    <br />
                    <br />
                    <br />
                </div>

                <div>
                    <h4>Report Details:</h4>
                    <b>Species:</b> {sighting.species}
                    <br />
                    <br />
                    <b>Location:</b> {sighting.location}
                    <br />
                    <br />
                    <b>Date:</b> {sighting.date}
                    <br />
                    <br />
                    <b>Time:</b> {sighting.time}
                </div>

            </li>


        </>
    )
}

export default SightingItem