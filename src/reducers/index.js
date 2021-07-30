import { combineReducers } from 'redux';
import user from './user';
import currency from './currency';
import wallet from './wallet';

const rootReducer = combineReducers({ user, currency, wallet });

export default rootReducer;
