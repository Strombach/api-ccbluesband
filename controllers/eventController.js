"use strict"

const eventController = {}

eventController.getAllEvents = (req, res, next) => {
  res.send('Hello From eventController')
}

module.exports = eventController
