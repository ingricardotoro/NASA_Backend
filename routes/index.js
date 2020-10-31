const express = require('express')
const app = express()

//Ruta para la gestion de Personas
app.use('/api/pictures', require('./pictures'))



module.exports = app