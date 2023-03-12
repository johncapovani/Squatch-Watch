import React, { useEffect, FC, ReactElement } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getSightings, reset } from "../features/sightings/sightingSlice";
import { useNavigate } from "react-router-dom";
import Datacard from "../components/Datacard";
import Spinner from '../components/Spinner'
import '../App.css'

const Home:FC = ():ReactElement => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { sightings, isError, isLoading, message } = useSelector((state:any):any => state.sightings)

    useEffect(():any => {
        if (isError) {
            console.log(message);
        }

        dispatch(getSightings())

        return () => {
            dispatch(reset())
        }
    }, [isError, message, navigate, dispatch])


    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="home">
            <h2 style={{paddingTop: '10px'}}>Report Feed</h2>
            <section className="content">
                {sightings.length > 0 ? (
                    <div className="sightings">
                        {sightings.map((sightings:any):any => (
                            <Datacard key={sightings._id} sighting={sightings} />
                        ))}
                    </div>
                ) : (<h3>No sightings found.</h3>)}
            </section>
        </div>
    )
}

export default Home;