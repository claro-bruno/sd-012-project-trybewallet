import { ADD_EXPENSE, CURRENCY_DATA, DELETE_ITEM } from '../actions/actionTypes';

const INITIAL_STATE = {
  id: 0,
  currenciesNames: [],
  exchangeRates: '',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  console.log('teste', state);
  switch (action.type) {
  case CURRENCY_DATA:
    return { ...state,
      currenciesNames: Object.keys(action.data)
        .filter((item) => item !== 'USDT'),
      exchangeRates: action.data };
  case ADD_EXPENSE:
    return { ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        { id: state.id,
          ...action.expense,
          exchangeRates: state.exchangeRates }] };
  case DELETE_ITEM:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense !== action.item) };
  default:
    return state;
  }
}

export default wallet;
