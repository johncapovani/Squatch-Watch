import { deleteSighting } from '../features/sightings/sightingSlice'
import { useDispatch } from "react-redux"
import './SightingItem.css'

function SightingItem({ sighting }) {
    const dispatch = useDispatch()
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
                <button className="viewreport"
                onClick={() => dispatch(deleteSighting(sighting._id))}>
                Delete Sighting
            </button>

            </li>


        </>
    )
}

export default SightingItem