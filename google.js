const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (token) => {

    const ticket = token && await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket && ticket.getPayload();

    return payload;
}
googleAuth().catch(console.error);


const checkAud = (userAud) => {
    return userAud === process.env.GOOGLE_CLIENT_ID
}

module.exports ={  googleAuth , checkAud } ;