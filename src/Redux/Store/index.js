import { createStore, combineReducers, compose } from 'redux';
import UserReducer from '../Reducers/UserReducer';
import WalletReducer from '../Reducers/WalletReducer';

const rootReducer = combineReducers({
  UserReducer,
  WalletReducer,
});

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(rootReducer, compose(extension));

export default store;
