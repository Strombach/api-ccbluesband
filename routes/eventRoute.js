"use strict"

const express = require('express')
const router = express.Router()

const controller = require('../controllers/eventController')

router.get('/', controller.getAllEvents)

router.get('/:eventId', controller.getSingleEvent)

router.post('/', controller.addNewEvent)

module.exports = router
