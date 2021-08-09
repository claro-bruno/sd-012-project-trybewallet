import { REQUEST_CURRENCIES, RECEIVE_CURRENCIES, RECEIVE_EXPENSES } from '../actions';

const initialState = {
  currenciesNames: [],
  currencies: [],
  id: 0,
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return ({
      ...state,
    });
  case RECEIVE_CURRENCIES:
    return ({
      ...state,
      currenciesNames: Object.keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
      currencies: action.payload,
    });
  case RECEIVE_EXPENSES:
    return ({
      ...state,
      id: state.id + 1,
      expenses: [
        ...state.expenses,
        {
          id: state.id,
          ...action.payload,
        },
      ],
    });
  default:
    return state;
  }
};

export default wallet;
