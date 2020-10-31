const Picture = require('../model/Picture')


//funcion to list all the pictures
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


//funcion to create a new Picture
const createPicture = async(req, res) => {


    const {
        title,
        url,
        date,
        explanation
    } = req.body

    //check if the picture date not exist
    const pictureExist = await Picture.findOne({ date })
    if (pictureExist) {
        return res.status(400).json({
            ok: false,
            msj: "Picture All ready Exist"
        })
    } else {


        try {
            //crate a instans of picture
            newPicture = new Picture({
                title,
                url,
                date,
                explanation
            })

            //save in DB
            if (await newPicture.save()) {

                //Picture created successfully
                res.status(201).json({
                    ok: true,
                    msg: 'Picture Created successfully',
                    newPicture,
                })

            } else {

                res.status(500).json({
                    ok: false,
                    msg: "Error creating New Picture"
                })
            }

        } catch (error) {

            console.log(error)
            res.status(500).json({
                ok: false,
                msg: "Error creating New Picrure"
            })
        }

    }

}

//funcion to delete Picture by Id
const deletePicture = async(req, res) => {

    let id = req.params.id
    await Picture.findByIdAndRemove(id, (err, pictureDB) => {

        //in case to get a error
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        //in case the id not exist, and not delete nothing
        if (!pictureDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'The id not exist'
                }
            })
        }

        //in case the Picture has been deleted
        res.status(200).json({
            ok: true,
            message: "Picture DELETED successfully"
        })
    })
}


module.exports = { listPicture, createPicture, deletePicture }