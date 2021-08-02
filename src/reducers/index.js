import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const combinedReducers = combineReducers({ user, wallet });

export default combinedReducers;
