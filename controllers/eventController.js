"use strict"

const eventController = {}

eventController.getAllEvents = (req, res, next) => {
  res.send('Hello From eventController')
}

eventController.getSingleEvent = (req, res, next) => {
  res.send('Hello from getSingleEvent')
}

eventController.addNewEvent = (req, res, next) => {
  res.send('New Event added!')
}

eventController.editEvent = (req, res, next) => {
  res.send('Edit event')
}

eventController.deleteEvent = (req, res, next) => {
  res.send('Delete event')
}

module.exports = eventController
