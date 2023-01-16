import axios from 'axios'

const API_URL = '/api/sightings/'

//Create new sighting
const createSighting = async (sightingData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, sightingData, config)

    return response.data

}

//Get user specific sightings
const getMySightings = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data

}

//Get sightings
const getSightings = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

const sightingService = {
    getSightings,
    createSighting,
    getMySightings,
}

export default sightingService