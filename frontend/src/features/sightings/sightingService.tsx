import axios from 'axios'

const API_URL = '/api/sightings/'

//Create new sighting
const createSighting = async (sightingData:any, token:any):Promise<any> => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, sightingData, config)

    return response.data

}

//Get user specific sightings
const getMySightings = async (token:any):Promise<any> => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + 'user', config)

    return response.data

}

//Get sightings
const getSightings = async ():Promise<any> => {
    const response = await axios.get(API_URL)

    return response.data
}

//Delete a sighting
const deleteSighting = async(sightingID:any, token:any):Promise<any> => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.delete(API_URL + sightingID, config)
    return response.data
}

const sightingService = {
    getSightings,
    createSighting,
    getMySightings,
    deleteSighting
}

export default sightingService