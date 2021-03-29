import axios from 'axios';


export const getAllImages = async () => {
    
    try {
        let images = await axios.get( 'api/images' );
        return images.data
    } catch (error) {
        console.log(error.message);
    }
}


export const getCategoryList = async (category) => {
    try {
        let res = await axios.get(`api/images/category/${category}`);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getProduct = async (id) => {
    try {
        let product = await axios.get(`/api/images/${id}`);
        return product.data;
    } catch (error) {
        console.log(error.message);
    }
    
}


