const express = require('express');
const imagesRouter = express.Router();

const Upload = require('../MongoDB/models/Upload');
const Account = require('../MongoDB/models/Account');


imagesRouter.get('/', async (req, res) => {
    try {
        const allUploads = await Upload.find({});
        res.json({allUploads});

    } catch (error) {
        console.error(error);
        res.status(500).send('oooppsss, something went wrong, cant get uploaded content')
    }
    
});

imagesRouter.get('/:id', async ( req, res) => {
    try {
        const id = req.params.id;

        const document = await Upload.findOne({ _id : id });

        res.status(200).json(document);

    } catch (error) {
        console.error(error);
        res.status(404).json('document doesnt exists')
    }
})

module.exports = imagesRouter;