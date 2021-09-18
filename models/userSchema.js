'use strict'

/** @description The schema for all data about a user.
 * Even a prehook for hashing the password when a new user is saved to the database.
*/

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
