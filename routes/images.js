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
});

imagesRouter.get('/category/:category', async ( req, res ) => {
    try {
        const category = req.params.category;

        const categoryList = await Upload.find({ category : category })

        console.log(category);
        //console.log(categoryList);
        res.status(200).json(categoryList);
        
    } catch (error) {
        console.log(error.message);
        res.send(500).json('Ooopppss. something went wrong');
    }
} )

module.exports = imagesRouter;