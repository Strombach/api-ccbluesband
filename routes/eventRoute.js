"use strict"

const express = require('express')
const router = express.Router()

const controller = require('../controllers/eventController')

router.get('/', controller.getAllEvents)

router.get('/:eventId', controller.getSingleEvent)

router.post('/', controller.addNewEvent)

router.put('/:eventId', controller.editEvent)

router.delete('/:eventId', controller.deleteEvent)

module.exports = router
