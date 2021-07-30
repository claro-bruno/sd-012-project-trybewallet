import user from './user';
import { combineReducers } from 'redux';
// import wallet from './wallet';

const reducer = combineReducers({user});
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
export default reducer;