import {
  GET_API,
  GET_API_SUCCESS,
  GET_API_ERROR,
  ADD_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const getExchangeRates = (payload) => {
  const keyCurrencies = Object.values(payload);
  const result = keyCurrencies.map((item) => ({
    code: item.code,
    name: item.name,
    ask: item.ask,
  }));
  return result;
};

const addExpense = (state, payload, responseAPI) => {
  const id = (state.length === 0) ? 0 : state.length;
  const exchangeRates = getExchangeRates(responseAPI);
  return [...state, { ...payload, id, exchangeRates }];
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_API:
    return {
      ...state,
      isFetching: true,
    };

  case GET_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };

  case GET_API_ERROR:
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: addExpense(state.expenses, action.payload, action.responseAPI),
    };

  default:
    return state;
  }
};

export default wallet;
