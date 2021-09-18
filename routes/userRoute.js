'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')

router.post('/login', controller.userLogin)

router.post('/register', controller.userRegister)

module.exports = router
