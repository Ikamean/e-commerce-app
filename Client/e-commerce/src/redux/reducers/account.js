const initialState = {
    "user" : null
}

const accountReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Account' : 
            state = { ...state, user : action.data }
            return state
        case 'Logout' :
            state ={ user : null }
            return state
        default : return state
    }
}


export const initializeAccount = (value) => {
    return async dispatch => {
        await dispatch({
            type: 'Initialize_Account',
            data: value
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


export default accountReducer