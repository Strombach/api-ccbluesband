"use strict"

const express = require('express')

const app = express()

app.use('/events', require('./routes/eventRoute'))
app.use('/', require('./routes/indexRoute'))

// Catch 404
app.use((req, res, next) => {
  res.status(404).json({
    "status": 404,
    "message": 'Nothing here'
  })
})

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
