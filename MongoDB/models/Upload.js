const mongoose = require('../connect');

const uploadSchema = new mongoose.Schema({
    category: String,
    details: String,
    image: Array,
    authorName: String,
    authorEmail: String,
    authorPicture: String,
    authorFacebook: String,
    authorNumber: String,
    creationDate: String
})

uploadSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
});



module.exports = mongoose.model('Upload', uploadSchema)