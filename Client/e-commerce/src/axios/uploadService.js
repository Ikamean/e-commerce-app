import axios from 'axios';


export const upload = async (payload) => {
    let response = '';

    try {
        response = await axios( 'api/upload' ,{
            method: 'POST',
            body: payload,
            headers: { 'Content-type' : 'application/json'}
        });
    } catch (error) {
        console.log(error.message);
    }
    
    return response.data
}


