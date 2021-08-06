import { GET_COINS, FETCH_COIN } from '../actions';

const INITIAL_STATE = {
  coins: [],
  expenses: [],
  isFetching: false,
};

const fetchAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_COIN:
    return {
      ...state,
      isFetching: true,
    };
  case GET_COINS:
    return {
      ...state,
      isFetching: false,
      coins: action.payload,
    };
  default: return state;
  }
};

export default fetchAPI;
