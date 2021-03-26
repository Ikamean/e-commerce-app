import { getAllImages, getCategoryList } from '../../axios/imagesService';
import { DeleteAllUploads } from '../../axios/AdminDelete';

const initialState = {
    "images" : [],
    "categoryList" : []
}

const imagesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Images' : 
            state = { ...state, images : action.data }
            return state
        case 'Initialize_Category' :
            state = { ...state, categoryList : action.data }
            return state
        case 'Admin_Cleanup' : 
            return initialState
        default : return state
    }
}

export const initCategory = (category) => {
    return async dispatch => {
        let payload = await getCategoryList(category);
        await dispatch({
            type: 'Initialize_Category',
            data: payload
        })
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



export const adminCleanup = () => {
    return async dispatch =>{
        await DeleteAllUploads();
        dispatch({
            type: 'Admin_Cleanup'
        })
    }
}



export default imagesReducer