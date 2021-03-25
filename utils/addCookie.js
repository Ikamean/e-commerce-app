module.exports = ( res, jwtToken ) => {
    return res.cookie( 'access_token', jwtToken, {
        httpOnly: true
    });
}