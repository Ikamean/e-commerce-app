import { getAllImages, getOneImage } from '../../axios/imagesService';
import { DeleteAllUploads } from '../../axios/AdminDelete';

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
        case 'Admin_Cleanup' : 
            return initialState
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

export const adminCleanup = () => {
    return async dispatch =>{
        await DeleteAllUploads();
        dispatch({
            type: 'Admin_Cleanup'
        })
    }
}



export default imagesReducer