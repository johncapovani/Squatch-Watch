import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getSightings, reset } from "../features/sightings/sightingSlice";
import Datacard from "../components/Datacard";
import Spinner from '../components/Spinner'

function Home() {
    const dispatch = useDispatch()
    const { sightings, isError, isLoading, message } = useSelector((state) => state.sightings)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        
        dispatch(getSightings())

        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])

    
  if (isLoading) {
    return <Spinner />
  }

    return (
        <div>
            <section className="content">
                {sightings.length > 0 ? (
                    <ul className="sightings">
                        {sightings.map((sighting) => (
                            <Datacard key={sighting._id} sighting={sighting} />
                        ))}
                    </ul>
                ) : (<h3>No sightings found.</h3>)}
            </section>
        </div>
    )
}

export default Home;