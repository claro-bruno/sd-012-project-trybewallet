import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from '../reducers/user';

const store = createStore(combineReducers(user, wallet), composeWithDevTools(
    applyMiddleware(thunk),
),);

export default store;
