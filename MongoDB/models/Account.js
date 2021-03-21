const mongoose = require('../connect');
const jwt = require('jsonwebtoken');

const accountSchema = new mongoose.Schema({
    name: String,
    picture: String,
    email: String,
    subID: String,
    uploads: Array,
    creationDate: String
})

accountSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
});



module.exports = mongoose.model('Account', accountSchema)