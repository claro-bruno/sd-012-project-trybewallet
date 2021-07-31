import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const allReducers = combineReducers({
  wallet,
  user,
});

export default allReducers;
