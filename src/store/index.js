import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// prettier-ignore
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
