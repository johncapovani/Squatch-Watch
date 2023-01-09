const express = require('express')
const router = express.Router()
const { getSightings, createSighting, deleteSighting, updateSighting
} = require('../controllers/sighting_controller')

//Add route  protection
const { protect } = require('../middleware/authMiddleware')

//GET all sightings
router.get('/', getSightings)

//CREATE a new sighting
router.post('/', createSighting)

// //DELETE one sighting by id
router.delete('/:id', deleteSighting)

//Update one sighting by id
router.put('/:id', protect, updateSighting)

module.exports = router