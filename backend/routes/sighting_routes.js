const express = require('express')
const router = express.Router()
const { getSightings, createSighting, deleteSighting, updateSighting, getOneSighting
} = require('../controllers/sighting_controller')

//Add route  protection
const { protect } = require('../middleware/authMiddleware')

//GET all sightings
router.get('/', protect, getSightings)

//GET one sighting
router.get('/:id',protect, getOneSighting)

//CREATE a new sighting
router.post('/', protect,createSighting)

// //DELETE one sighting by id
router.delete('/:id', protect, deleteSighting)

//Update one sighting by id
router.put('/:id', protect, updateSighting)

module.exports = router