const asyncHandler = require('express-async-handler')
//mongoose model
let Sighting = require('../models/sightingModel');
const User = require('../models/userModel')



//CREATE a sighting
//POST
//Access Level Public
const createSighting = asyncHandler(async (req, res) => {

    const newSighting = await Sighting.create({
        date: Date.parse(req.body.date),
        time: req.body.time,
        location: req.body.location,
        species: req.body.species,
        images: req.body.images,
        description: req.body.description,
        user: req.user.id
    })
    if (newSighting) {
        res.status(200).json(newSighting)
    }
    else {
        res.status(400)
        throw new Error('Sighting not created.')
    }
})



//READ all sightings
//GET
//Access Level Private
const getSightings = asyncHandler(async (req, res) => {
    //get sightings through our mongoDB returns all of the sightings
    const allSightings = await Sighting.find({ user: req.user.id })

    res.status(200).json(allSightings)
})

//READ ONE sighting
//GET
//not sure how to put the auth requirements in here
const getOneSighting =  asyncHandler(async (req,res) => {
    //get one sighting from mongodb, returns one sighting by ID
    const oneSighting = await Sighting.findById(req.params.id)

    res.status(200).json(oneSighting)
})

//UPDATE Sighting
//PUT
//Access Level Private
const updateSighting = asyncHandler(async (req, res) => {

    const sighting = await Sighting.findById(req.params.id)

    if (!sighting) {
        res.status(400)
        throw new Error('Sighting not found')
    }
    //get the user
    const user = await User.findById(req.user.id)
    //Check for  user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure user matches the record that is trying to be deleted
    if (sighting.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    //New set to true will tell mongoose to create it if the sighting does not exist
    const updatedSighting = await Sighting.findByIdAndUpdate(req.params.id, req.
        body, {
        new: true,
    })

    res.status(200).json(updatedSighting)
})


//DELETE Sighting 
//DELETE
//Access Level Private
const deleteSighting = asyncHandler(async (req, res) => {

    const sighting = await Sighting.findById(req.params.id)

    if (!sighting) {
        res.status(400)
        throw new Error('Sighting does not exist')
    }
    //get the user
    const user = await User.findById(req.user.id)
    //Check for  user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure user matches the record that is trying to be deleted
    if (sighting.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    const deletedSighting = await Sighting.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json(`This object document has been deleted succesfully ${deletedSighting}!`)
})



module.exports = {
    getSightings, createSighting, deleteSighting, updateSighting, getOneSighting
}