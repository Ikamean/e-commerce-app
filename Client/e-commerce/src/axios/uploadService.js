import axios from 'axios';


export const upload = async (payload) => {
    let response = '';
    const { category, details, image, price } = payload;

    try {
        response = await axios( 'api/upload' ,{
            method: 'POST',
            data: { 
                category: category,
                details: details,
                image: image,
                price: price
                },
            headers: { 'Content-type' : 'application/json'}
        });
    } catch (error) {
        console.log(error.message);
    }
    
    return response.data
}


