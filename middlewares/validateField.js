//==========================
//this fucrion allow us to recibe the errors by REQ y send them 
//===========================

const { response } = require('express')
const { validationResult } = require('express-validator')

const ValidateField = (req, res = response, next) => {

    //here, we get the error
    const errors = validationResult(req)
    console.log(errors)

    //check is there is a error
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next()
}

module.exports = { ValidateField }