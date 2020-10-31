const Picture = require('../model/Picture')


//funcion para listar todos los empleados
const listPicture = async(req, res) => {

    await Picture.find({})
        .exec(function(err, pictures) {

            //if we get a error 500
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            //if all is ok
            res.status(200).json({
                ok: true,
                msg: "List of Pictures",
                pictures
            })

            console.log(pictures);
        });

}

module.exports = { listPicture }