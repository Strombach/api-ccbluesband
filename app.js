"use strict"

const express = require('express')

const app = express()

app.get('/', require('./routes/indexRoute'))

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
