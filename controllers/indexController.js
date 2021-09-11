"use strict"

const indexController = {}

indexController.getIndex = (req, res, next) => {
  res.send('Hello From indexController')
}

module.exports = indexController
