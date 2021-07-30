import { GET_CURRENCIES, LOADING, ADD_EXPENSE, FORM_CHANGE } from '../actions';

const INITIAL_STATE = {
  currentCurrency: 'BRL',
  loading: false,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case GET_CURRENCIES:
    return { ...state, loading: false, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, loading: false, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
};

export default wallet;
