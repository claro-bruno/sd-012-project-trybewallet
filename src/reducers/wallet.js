import {
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_ERROR,
  ADD_DATA_FORMS,
} from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: null,
};

function wallet(state = INITIAL_STATE, action) {
  const { type, payload, error } = action;
  const { expenses } = state;

  switch (type) {
  case GET_COINS:
    return { ...state };

  case GET_COINS_SUCCESS:
    return {
      ...state,
      error: null,
      currencies: payload,
    };

  case GET_COINS_ERROR:
    return { ...state, error };

  case ADD_DATA_FORMS:
    return {
      ...state,
      expenses: [...expenses, payload],
    };

  default:
    return state;
  }
}

export default wallet;
