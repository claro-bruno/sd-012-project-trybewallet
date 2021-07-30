import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from '../reducers/user';
import wallet from '../reducers/wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const reducer = combineReducers({
  user,
  wallet });
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk),
);

export default store;
