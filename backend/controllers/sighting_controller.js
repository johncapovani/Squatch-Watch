const asyncHandler = require('express-async-handler')
//mongoose model
let Sighting = require('../models/Sighting');
const User = require('../models/userModel')

//find all sightings
const getSightings = asyncHandler(async (req, res) => {
    //get goals through our mongoDB returns all of the goals
    const allSightings = await Sighting.find()

    res.status(200).json(allSightings)
})

//create a sighting
const createSighting = asyncHandler(async (req, res) => {

    const newSighting = await Sighting.create({
        user: req.body.user,
        date: Date.parse(req.body.date),
        time: req.body.time,
        location: req.body.location,
        species: req.body.species,
        images: req.body.images,
        description: req.body.description
    })
    if (newSighting) {
        res.status(200).json(newSighting)
    }
    else {
        res.status(400)
        throw new Error('Sighting not created.')
    }
})

//delete one
const deleteSighting = asyncHandler(async (req, res) => {
    const deletedSighting = await Sighting.findByIdAndDelete(req.params.id)
    res.status(200).json(`${deletedSighting} successfully deleted!`)
});

//@desc Update Sighting
//@route PUT /sightings/id
//@access Private
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

    //New set to true will tell mongoose to create it if the goal does not exist
    const updatedSighting = await Sighting.findByIdAndUpdate(req.params.id, req.
        body, {
        new: true,
    })

    res.status(200).json(updatedSighting)
})


module.exports = {
    getSightings, createSighting, deleteSighting, updateSighting
}