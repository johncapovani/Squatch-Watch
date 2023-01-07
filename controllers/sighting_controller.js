const asyncHandler = require('express-async-handler')
const express = require('express');
const sighting = express.Router();
//mongoose model
let Sighting = require('../models/Sighting');

//find all sightings
const getSightings = asyncHandler(async (req, res) => {
    //get goals through our mongoDB returns all of the goals
    const allSightings = await Sighting.find()
    if (allSightings) {
        res.status(200).json(goals)
    }
    else {
        res.status(400)
        throw new Error('List not found')
    }
})

//create a sighting
const createSighting = asyncHandler(async (req, res) => {

    const newSighting = await Sighting.create({
        user: req.body.user,
        date: Date.parse(req.body.date),
        time: req.body.time,
        location: req.body.location,
        images: req.body.images,
        description: req.body.description
    })
})

//delete one
const deleteSighting = asyncHandler(async (req, res) => {
    const sight = await Sighting.findById(req.params.id)
    const deletedSight = await Sighting.findByIdAndDelete(req.params.id)
    if (!sight) {
        res.status(400)
        throw new Error('')
    }
    else {
        res.status(200).json(`${deletedSighting} successfully deleted!`)
    }
});


module.exports = {
    getSightings, deleteSighting
}