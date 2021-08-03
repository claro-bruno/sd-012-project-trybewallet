import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import valorCR from '../reducers/index';

const store = createStore(
  valorCR,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
