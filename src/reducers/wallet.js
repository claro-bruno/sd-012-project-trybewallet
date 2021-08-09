// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE } from '../actions/index';

const initialState = {
  expenses: [],
};

const reducerExpenses = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default reducerExpenses;
