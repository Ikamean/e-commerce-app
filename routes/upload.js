const express = require('express');
const uploadRouter = express.Router();

const { cloudinary } = require('../utils/cloudinary');

const Upload = require('../MongoDB/models/Upload');
const Account = require('../MongoDB/models/Account');

const JWT = require('jsonwebtoken');

uploadRouter.post('/', async (req, res) => {
    try {
        const token = req.cookies.access_token;
        const body = req.body
        let image = body.image;
        let cloudinaryResponse = [];


        if(token){

            const decoded = JWT.verify(token, process.env.JWT_SECRET)
            let loggedUser = await Account.findOne({ subID: decoded.subID })

            // uploading images and getting public Id back and pushing them to cloudinaryResponse Array
            const uploaderFunction = async  (element) => {
                let res = await cloudinary.uploader.upload(element, { upload_preset : 'ExtremeShop', use_filename: true, unique_filename: false });
                return res.public_id;
            }
            
            for( i = 0; i < image.length; i ++){
                let publicId = await uploaderFunction(image[i]);
                cloudinaryResponse.push(publicId)
            }

            
            let uploadedPost = new Upload ({
                category: body.category,
                details: body.details,
                image: cloudinaryResponse,
                price: body.price,
                authorName: loggedUser.name,
                authorEmail: loggedUser.email,
                authorPicture: loggedUser.picture,
                authorFacebook: body.facebook,
                authorNumber: body.number,
                creationDate: Date()
            })

            let updatedUploads = loggedUser.uploads.concat(uploadedPost);

            await Account.findOneAndUpdate({ subID: decoded.subID }, { uploads : updatedUploads });

            await uploadedPost.save();
            
            

            res.status(200).json({ uploaded : 'True', content : uploadedPost });
        
        }else{
            console.log('Token do not Exist');
            res.status(400).json('unauthorized request')
        }

    } catch (error) {
        console.error(error);
        res.status(500).json('something went wrong')
    }
    
});


uploadRouter.delete('/deleteAll', async ( req, res) => {
    try {
        const token = req.cookies.access_token;
        const decoded = JWT.verify(token, process.env.JWT_SECRET)
        
        if( decoded.subID === process.env.ADMIN_SUB){
            
            await Upload.deleteMany({});

            await Account.updateMany({}, { $set: { uploads : [] } });

            
            res.status(200).json('Deleted All uploaded content');
        }{
            res.status(400).json('Must Be logged in as administrator to delete all documents');
        }
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('ooppss, cant delete everything, something went wrong..')
    }
    
})

uploadRouter.delete('/delete/:id', async ( req, res ) => {

    try {
        const token = req.cookies.access_token;
        const decoded = JWT.verify(token, process.env.JWT_SECRET)
        let loggedUser = await Account.findOne({ subID: decoded.subID })

        const documentId = req.params.id;
        await Upload.findByIdAndRemove({ _id: documentId });

        let updateUserUploads = loggedUser.uploads.filter( document => JSON.stringify(document._id) !== JSON.stringify(documentId) );

        await Account.findOneAndUpdate({ subID : decoded.subID }, { $set : { uploads: updateUserUploads }});


        res.status(200).json('Document Deleted successfully');

    } catch (error) {
        console.error(error);
        res.status(500).send('Cant delete document, something went wrong');
    }
    
})


module.exports = uploadRouter;