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
            headers: { 'Content-type' : 'application/json' }
        });
    } catch (error) {
        console.log(error.message);
    }
    
    return response.data
}

export const deleteProduct = async (id) => {
    try {
        let res = await axios( `api/upload/delete/${id}`,{
            method: 'DELETE',
            headers: { 'Content-type' : 'application/json' }
        });
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
}
