import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from '../reducers/user';

const combinedReducers = combineReducers({ user })

const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk),));

// const store = createStore((state = {}) => (state), composeWithDevTools());

export default store;