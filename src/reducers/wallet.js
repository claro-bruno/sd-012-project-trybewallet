import {
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
  REQUEST_CURRENCIESII_SUCCESS,
  REQUEST_CURRENCIESII_ERROR,
  EXCLUDE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions/index';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload, error: '' };

  case REQUEST_CURRENCIES_ERROR:
    return { ...state, error: 'Erro ao obter currencies' };

  case REQUEST_CURRENCIESII_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.payload },
      ],
      error: '' };

  case REQUEST_CURRENCIESII_ERROR:
    return { ...state, error: 'Erro ao obter currencies' };

  case EXCLUDE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.reduce((list, expense) => (
        expense.id === action.state.id
          ? [...list, { ...action.state, exchangeRates: expense.exchangeRates }]
          : [...list, { ...expense }]), []),
    };

  default:
    return state;
  }
}

export default walletReducer;
