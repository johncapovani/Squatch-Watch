import React from 'react'
import "./CreateUpdateSighting.css"

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
//Bring in the create Sighting function from Sighting Slice
import { updateSighting, reset } from '../features/sightings/sightingSlice'

import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'

function UpdateSighting() {


    //Create the useState to collect form information when a sighting is being created
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        location: '',
        species: '',
        images: '',
        description: '',
    })

    const { date, time, location, species, images, description } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { sightings, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.sightings
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || sightings) {

        }

        dispatch(reset())
    }, [sightings, isError, isSuccess, message, navigate, dispatch])


    //When the user types trigger the onchange

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //form validation

        if (!date || !time || !location || !species || !images || !description) {
            toast.error('Populate all required fields')
        } else {

            const sightingData = {
                date, time, location, species, images, description,
            }

            dispatch(updateSighting(sightings._id, sightingData))
            toast.success('Update successfully submitted!')
            navigate('/')
        }

    }

    if (isLoading) {
        return <Spinner />
    }

    return (

        <>
            <div className="reportSightingContainer">


                <form className='reportform-container' onSubmit={handleSubmit}>

                    <div className='reportform-container-item'>
                        <h1>Update your Sighting</h1>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input id="date" type="date" name='date' value={date} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="time">Time of Sighting</label>
                            <input id="time" type="time" name='time' value={time} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="location">Location</label>
                            <input id="location" type="text" name='location' value={location} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="species">Species</label>
                            <input id="species" type="text" name='species' value={species} onChange={onChange} />
                        </div>
                        <div>
                            <label htmlFor="image-url">Image URL</label>
                            <input id="image-url" type="text" name='images' value={images} onChange={onChange} />
                        </div>
                        <button className='sightingButton' type="submit">Publish Your Sighting!</button>
                    </div>

                    <div className='reportform-container-item-details'>
                        <div>
                            <label htmlFor="Sighting Details">Sighting Details</label>
                            <div className='detailarea' >
                                <textarea placeholder="Describe your sighting experience in detail..." rows="7" name='description' value={description} onChange={onChange} ></textarea>
                            </div>
                        </div>
                    </div>



                </form>




            </div>
        </>

    )
}

export default UpdateSighting