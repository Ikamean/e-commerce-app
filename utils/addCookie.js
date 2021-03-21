module.exports = ( res, jwtToken ) => {
    res.cookie( 'access_token', jwtToken, {
        maxAge: 3600,
        httpOnly: true
    });
}