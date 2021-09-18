'use strict'

const User = require('../models/userSchema')

const loginController = {}

/**
 * Handles post-request on the login-route.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next function.
 */
loginController.postLogin = (req, res, next) => {
  res.send('Logged in!')
}

module.exports = loginController
