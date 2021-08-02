import { combineReducers } from 'redux';
import UserReducer from '../Redux/Reducers/User';
import WalletReducer from '../Redux/Reducers/WalletReducer';

const reducer = combineReducers({
  UserReducer,
  WalletReducer,
});

export default reducer;
