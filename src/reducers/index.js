import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import saveData from './saveData';

const rootReducer = combineReducers({ user, wallet, saveData });

export default rootReducer;
