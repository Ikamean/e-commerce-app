const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
    console.log('connected to MongoDB')
    })
    .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
    })

module.exports = mongoose;