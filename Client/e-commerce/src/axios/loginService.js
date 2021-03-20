import axios from 'axios';


export const verifyToken = async (token) => {
    let verification = await axios.post( 'api/login', {}, { headers : { Authorization: `Bearer ${token}` }});
    return verification.data
}
