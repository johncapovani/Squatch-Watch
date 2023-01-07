const express = require('express')
const router = express.Router()
const { getSightings, deleteSighting, createSighting
} = require('../controllers/sighting_controller')

//GET all sightings
router.get('/', getSightings)

//CREATE a new sighting
router.post('/', createSighting)

//DELETE one sighting by id
router.delete('/:id', deleteSighting)