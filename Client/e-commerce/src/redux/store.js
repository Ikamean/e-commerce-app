import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from './reducers/account';


const reducer = combineReducers({
    account: accountReducer
});

const store = createStore(reducer,applyMiddleware(thunk))

export default store