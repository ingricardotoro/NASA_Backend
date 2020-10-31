const express = require('express')
const app = express()

//Route to manage the pictures
app.use('/api/pictures', require('./pictures'))



module.exports = app