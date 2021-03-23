import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from './reducers/account';
import imagesReducer from './reducers/images';


const reducer = combineReducers({
    account: accountReducer,
    uploads: imagesReducer
});

const store = createStore(reducer,applyMiddleware(thunk))

export default store