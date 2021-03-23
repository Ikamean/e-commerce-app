import { getAllImages, getOneImage } from '../../axios/imagesService';

const initialState = {
    "images" : [],
    "currentImage" : null
}

const imagesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Images' : 
            state = { ...state, images : action.data }
            return state
        case 'Initialize_Current_Image' :
            state = { ...state, currentImage : action.data }
            return state
        default : return state
    }
}


export const initAllImages = () => {
    return async dispatch => {
        let images = await getAllImages();
        await dispatch({
            type: 'Initialize_Images',
            data: images
        })
    }
}

export const initCurrentImage = (id) => {
    return async dispatch => {
        let currentImage = await getOneImage(id);
        await dispatch({
            type: 'Initialize_Current_Image',
            data: currentImage
        })
    }
}



export default imagesReducer