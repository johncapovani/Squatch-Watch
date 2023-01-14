import axios from 'axios'

const API_URL= '/api/sightings/'

//Get sightings
const getSightings = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

const sightingService = {
    getSightings
}

export default sightingService