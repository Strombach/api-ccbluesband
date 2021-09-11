"use strict"

const express = require("express")

const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello From Express!')
})

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
