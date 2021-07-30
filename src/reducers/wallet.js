// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  currency: 'BRL',
};

const wallet = createReducer(INITIAL_STATE, (builder) => {
  builder.addDefaultCase((state) => state);
});

export default wallet;
