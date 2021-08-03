// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING, LOADING_SUCCESS, LOADING_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  loading: true,
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: true };
  case LOADING_SUCCESS:
    return { ...state,
      loading: false,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };
  case LOADING_EXPENSES:
    action.payload.exchangeRates = action.responseJson;
    return { ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
