const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('DB Connected')
    } catch (error) {
        console.log(error)
        throw new Error('Error connecting to DataBase')
    }
}


module.exports = dbConnection