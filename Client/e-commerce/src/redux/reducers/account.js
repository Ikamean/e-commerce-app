import { getLoggedUser } from '../../axios/loginService';

const initialState = {
    "user" : null,
    "userCard" : false
}

const accountReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Account' : 
            state = { ...state, user : action.data }
            return state
        case 'Logout' :
            state ={ user : null }
            return state
        case 'Toggle_Card' :
            return { ...state, userCard : !state.userCard }
        default : return state
    }
}


export const initializeAccount = () => {
    return async dispatch => {
        let user = await getLoggedUser();
        await dispatch({
            type: 'Initialize_Account',
            data: user
        })
    }
}

export const logoutAccount = () => {
    return dispatch => {
        dispatch({
            type: 'Logout'
        })
    }
}

export const toggleUserCard = () => {
    return dispatch => {
        dispatch({
            type: 'Toggle_Card'
        })
    }
}


export default accountReducer