'use strict'

const User = require('../schemas/userSchema')

const userController = {}

/**
 * Handles post-request on the login-route.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next function.
 */
userController.userLogin = async (req, res, next) => {
  try {
    let userLogin = await User.findOne({ username: req.body.username })
    res.json(userLogin)

  } catch (error) {
    res.sendStatus(403).json({
      error
    })
  }
}

/**
 * Handles post-request for registering new users.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next function.
 */
userController.userRegister = async (req, res, next) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })

    let dbResponse = await newUser.save()

    res.send(dbResponse)
  } catch (error) {
    res.statusStatus(422).json({
      errorMessage: error.message,
      fullError: error
    })
  }
}

module.exports = userController
