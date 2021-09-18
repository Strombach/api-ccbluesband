'use strict'

const express = require('express')
const mongoose = require('mongoose')

// Load env variables from .env
require('dotenv').config()

// Reads port from env. varible named PORT
const port = process.env.PORT

const app = express()

// Connect to database. Reads URL from env varible named MONGO_DB.
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.on('open', () => {
  console.log('Connected to DB')
})

// Routes for the application
app.use('/login', require('./routes/loginRoute'))
app.use('/events', require('./routes/eventRoute'))
app.use('/', require('./routes/indexRoute'))

// Catch 404
app.use((req, res, next) => {
  res.status(404).json({
    "status": 404,
    "message": 'Nothing here'
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
