module.exports = ( res, jwtToken ) => {
    res.cookie( 'access_token', jwtToken, {
        httpOnly: true
    });
}