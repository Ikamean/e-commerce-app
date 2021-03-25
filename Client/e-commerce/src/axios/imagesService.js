import axios from 'axios';


export const getAllImages = async () => {
    let images = await axios.get( 'api/images' );
    return images.data
}

export const getOneImage = async (id) =>{
    let image = await axios.get(`api/images/${id}`);
    return image.data
}


