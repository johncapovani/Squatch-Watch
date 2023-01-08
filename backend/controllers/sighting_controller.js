const asyncHandler = require('express-async-handler')
//mongoose model
let Sighting = require('../models/Sighting');

//find all sightings
const getSightings = asyncHandler(async (req, res) => {
    //get goals through our mongoDB returns all of the goals
    const allSightings = await Sighting.find()
    
    res.status(200).json(allSightings)
})

//create a sighting
// const createSighting = asyncHandler(async (req, res) => {

//     const newSighting = await Sighting.create({
//         user: req.body.user,
//         date: Date.parse(req.body.date),
//         time: req.body.time,
//         location: req.body.location,
//         images: req.body.images,
//         description: req.body.description
//     })
//     if (newSighting) {
//         res.status(200).json(newSighting)
//     }
//     else {
//         res.status(400)
//         throw new Error('Sighting not found.')
//     }
// })

// //delete one
// const deleteSighting = asyncHandler(async (req, res) => {
//     const sight = await Sighting.findById(req.params.id)
//     const deletedSight = await Sighting.findByIdAndDelete(req.params.id)
//     if (!sight) {
//         res.status(400)
//         throw new Error('Sighting not found.')
//     }
//     else {
//         res.status(200).json(`${deletedSighting} successfully deleted!`)
//     }
// });


module.exports = {
    getSightings
}