const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const pictureSchema = Schema({

    title: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Title must exist'],
    },

    url: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'URL must exist']
    },

    date: {
        type: Date,
        trim: true,
        unique: true,
        required: [true, 'Date must exist']
    },
    explanation: {
        type: String,
        trim: true,
        required: [true, 'Explanation must exist']
    },

}, { timestamps: true })

pictureSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = model('Picture', pictureSchema)