import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getSightings, reset } from "../features/sightings/sightingSlice";
import Datacard from "../components/Datacard";

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { sightings, isError, message } = useSelector((state) => state.sightings)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        
        dispatch(getSightings())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    return (
        <div>
            <section className="content">
                {sightings.length > 0 ? (
                    <div className="sightings">
                        {sightings.map((sighting) => (
                            <Datacard key={sighting._id} sighting={sighting} />
                        ))}
                    </div>
                ) : (<h3>No sightings found.</h3>)}
            </section>
        </div>
    )
}

export default Home;