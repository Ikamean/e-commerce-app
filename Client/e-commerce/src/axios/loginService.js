import axios from 'axios';


export const verifyToken = async (token) => {
    let verification = await axios.post( '/api/login', {}, { headers : { Authorization: `Bearer ${token}` }});
    
    return verification.data
}

export const getLoggedUser = async () =>{
    let user = await axios.get('/api/login');

    return user.data
}
