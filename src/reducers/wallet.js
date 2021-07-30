import {
  GET_CURRENCY,
  GET_CURRENCY_SUCCESS,
  SAVE_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
    };

  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };

  case SAVE_EXPENSES:
    return (
      {
        ...state,
        expenses: [...state.expenses, { ...action.payload, id: state.id }],
        id: state.id + 1,
      }
    );
  default:
    return state;
  }
}
