const express = require('express');
const Account = require('../MongoDB/models/Account');

const googleAuth = require('../google');

const loginRouter = express.Router();

loginRouter.post('/', async ( req,res ) => {
    const headers = req.headers['authorization'];

    const token = headers.split(' ')[0] === "Bearer" && headers.split(' ')[1]
    let authorized = await googleAuth(token);

    const account = new Account({
        name: authorized.name,
        picture: authorized.picture,
        email: authorized.email,
        subID: authorized.sub,
        posts: [],
        creationDate: new Date()
    })

    let newAccount = await Account.find({ subID : authorized.sub })

    newAccount.length === 0 && await account.save();
    
    res.status(200).json(authorized)
})



module.exports = loginRouter;