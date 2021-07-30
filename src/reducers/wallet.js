import { UPDATE_CURRENCY, UPDATE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_CURRENCY:
    return { ...state, currencies: [...state.currencies, payload] };
  case UPDATE_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
};

export default wallet;
