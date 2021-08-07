import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './reducers';

const sotre = createStore(
  Reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default sotre;
