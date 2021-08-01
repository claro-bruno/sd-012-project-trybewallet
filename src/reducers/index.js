import { combineReducers } from 'redux';
import userReducer from './user';
import fetchReducer from './fetch';
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducer = combineReducers({
  user: userReducer,
  wallet: fetchReducer,
});

export default rootReducer;
