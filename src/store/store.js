import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user';

const combinedReducers = combineReducers({ userReducer });

const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
