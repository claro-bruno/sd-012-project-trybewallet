import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WalletReducer from './WalletReducer';

const rootReducer = combineReducers({ UserReducer, WalletReducer });

export default rootReducer;
