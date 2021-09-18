'use strict'

const User = require('../schemas/userSchema')

const userController = {}

/**
 * Handles post-request on the login-route.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next function.
 */
userController.userLogin = (req, res, next) => {
  res.send('Logged in!')
}

userController.userRegister = (req, res, next) => {
  res.send('User registered')
}

module.exports = userController