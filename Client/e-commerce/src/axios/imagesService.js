import axios from 'axios';


export const getAllImages = async () => {
    let images = await axios.get( 'api/images' );
    return images.data
}


export const getCategoryList = async (category) => {
    try {
        let res = await axios.get(`api/images/category/${category}`);
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
    
}


