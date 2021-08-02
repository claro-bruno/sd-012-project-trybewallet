import { combineReducers } from 'redux';
import UserReducer from './User';
import WalletReducer from './WalletReducer';

const rootReducer = combineReducers({ UserReducer, WalletReducer });

export default rootReducer;
