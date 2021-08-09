import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import exchange from './exchange';

const rootReducer = combineReducers({ user, wallet, exchange });

export default rootReducer;
