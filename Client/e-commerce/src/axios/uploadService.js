import axios from 'axios';


export const upload = async (payload) => {
    let response = '';
    const { category, details, image, price, number, facebook } = payload;

    try {
        response = await axios( 'api/upload' ,{
            method: 'POST',
            data: { 
                category: category,
                details: details,
                image: image,
                price: price,
                number: number,
                facebook: facebook
                },
            headers: { 'Content-type' : 'application/json'}
        });
    } catch (error) {
        console.log(error.message);
    }
    
    return response.data
}


