const express = require('express');
const Account = require('../MongoDB/models/Account');

const JWT = require ('jsonwebtoken');

const loginRouter = express.Router();

const { checkAud } = require('../google');
const { googleAuth } = require('../google');
const addCookie = require('../utils/addCookie');



loginRouter.post('/', async ( req,res ) => {
    const headers = req.headers['authorization'];

    const token = headers.split(' ')[0] === "Bearer" && headers.split(' ')[1]
    let authorized = await googleAuth(token);
    const checkUserAud = checkAud(authorized.aud);

    const cloudAccount = new Account({
        name: authorized.name,
        picture: authorized.picture,
        email: authorized.email,
        subID: authorized.sub,
        uploads: [],
        creationDate: new Date()
    })

    const payload = {
        subID: authorized.sub
    }
    const jwtToken = JWT.sign(payload, process.env.JWT_SECRET);

    let findIfExists = await Account.find({ subID : authorized.sub })

    if( checkUserAud && findIfExists.length === 0 ){
        await cloudAccount.save();
    }
    
    (checkUserAud && authorized) && addCookie(res, jwtToken);

    res.status(200).end();
    
});

loginRouter.get('/', async ( req, res ) => {
    
    const token = req.cookies.access_token;
    
    const decoded = JWT.verify(token, process.env.JWT_SECRET)

    let loggedUser = await Account.findOne({ subId : decoded.sub })
    

    res.status(200).json(loggedUser);
})


module.exports = loginRouter;