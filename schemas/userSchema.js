'use strict'

/** @description The schema for all data about a user.
 * Even a prehook for hashing the password when a new user is saved to the database.
*/

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

// Number of salt rounds for hashing password.
const saltRounds = 12

/**
 * The prehook that hashes the password before
 * saving it to the database if modified or new.
*/

userSchema.pre('save', async function (next) {

  if (this.isModified('password') || this.isNew) {
    const hashPassword = await bcrypt.hash(this.password, saltRounds)
    this.password = hashPassword
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
