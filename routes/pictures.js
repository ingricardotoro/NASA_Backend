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
const { listPicture } = require('../controllers/picturesController')

//=======================
//ROUTES
//=======================
//Rutas para crear nuevos empleados (POST) .../api/employees
/*router.post('/', [
    check('personid', 'El personId es obligatorio').not().isEmpty(),
    check('codeEmployee', 'El codeEmpleado es obligatorio').not().isEmpty(),
    check('name', 'El nombre de la persona es obligatorio').not().isEmpty(),
    check('lastname', 'El apellido de la persona es obligatorio').not().isEmpty(),
    check('identidad', 'La identidad de la persona es obligatoria').not().isEmpty(),
    check('gender', 'El género de la persona es obligatorio').not().isEmpty(),
    check('phone1', 'El teléfono de la persona es obligatoria').not().isEmpty(),
    validarCampo
], createEmployee)*/

//Ruta para listar a todos los empleados creados
router.get('/', listPicture)

//Rutas para crear actualizar empleado por ID (DELETE) .../api/employees/delete/id
//router.delete('/delete/:id', deleteEmployee)


module.exports = router