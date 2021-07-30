import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers(user, wallet), composeWithDevTools);

export default store;