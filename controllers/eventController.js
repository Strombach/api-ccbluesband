"use strict"

const eventController = {}

eventController.getAllEvents = (req, res, next) => {
  res.send('Hello From eventController')
}

eventController.addNewEvent = (req, res, next) => {
  res.send('New Event added!')
}

module.exports = eventController
