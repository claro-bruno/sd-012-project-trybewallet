import { REQUEST_API, REQUEST_API_SUCCESS, SAVE_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  id: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return ({ ...state, isLoading: true });

  case REQUEST_API_SUCCESS:
    return ({ ...state, currencies: action.data, isLoading: false });

  case SAVE_EXPENSES:
    return ({ ...state,
      id: state.id + 1,
      expenses: [...state.expenses, action.expense] });

  default:
    return state;
  }
};

export default wallet;
