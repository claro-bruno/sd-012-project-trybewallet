// Esse reducer será responsável por tratar as informações da pessoa usuária
import { createReducer } from '@reduxjs/toolkit';
import { IS_VALID, LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  email: '',
  validLogin: false,
};

const user = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(LOGIN_ACTION, (state, action) => ({
    ...state,
    email: action.payload,
  }));
  builder.addCase(IS_VALID, (state, action) => ({
    validLogin: action.payload,
  }));
  builder.addDefaultCase((state) => state);
});

export default user;
