// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { COINS_SUCCESS, COINS_ERROR, EXPENSE_ERROR, EXPENSE_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [''],
  expenses: [],
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case COINS_SUCCESS:
    return { ...state, currencies: action.state, error: '' };
  case COINS_ERROR:
    return { ...state, error: 'Ocorreu um erro de comunicação com API' };
  case EXPENSE_SUCCESS:
    return { ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.state },
      ],
      error: '',
    };
  case EXPENSE_ERROR:
    return { ...state, error: 'Ocorreu um erro de comunicação com API' };
  default:
    return state;
  }
};

export default walletReducer;
