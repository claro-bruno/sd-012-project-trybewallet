import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducer from '../reducers';

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
