//===============================
//Files With Routes of Pictures
//Rutas : localhost:4000/api/pictures
//===============================

const { Router } = require('express')

const router = Router()
const { check } = require('express-validator')

//import Middleware to chech if exist errors
const { ValidateField } = require('../middlewares/validateField')

//import the controllers
const { listPicture, createPicture, deletePicture } = require('../controllers/picturesController')

//=======================
//ROUTES
//=======================
//Route to crate a new picture (POST) .../api/pictures
router.post('/', [
    check('title', 'The title is obligatory').not().isEmpty(),
    check('url', 'The url is obligatory').not().isEmpty(),
    check('date', 'The date is obligatory').not().isEmpty(),
    check('explanation', 'The explanation is obligatory').not().isEmpty(),
    ValidateField
], createPicture)

//Route to show all the pictures  (GET).../api/pictures
router.get('/', listPicture)

//Route to delete one picture by ID (DELETE) .../api/picture/delete/id
router.delete('/delete/:id', deletePicture)


module.exports = router