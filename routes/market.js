const express = require('express');
const marketRouter = express.Router();


const Upload = require('../MongoDB/models/Upload');

marketRouter.get('/:mail', async (req,res) => {
    try {

        const mail = req.params.mail;
        
        const userUploads = await Upload.find({ authorEmail : mail });
        

        res.json( { market : userUploads } );

    } catch (error) {
        res.send(500).end();
        console.log(error.message);
    }
});

module.exports = marketRouter 