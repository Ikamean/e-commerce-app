import { getUserMarket } from '../../axios/marketService';

const initialState = {
    "market" : [],
}

const marketReducer = (state=initialState, action) => {
    switch(action.type){
        case 'Initialize_Market' : 
            state = { ...state, market : action.data }
            return state
        default : return state
    }
}

export const initMarket = (mail) => {
    return async dispatch => {
        let payload = await getUserMarket(mail);
        await dispatch({
            type: 'Initialize_Market',
            data: payload.market
        })
    }
}

export default marketReducer