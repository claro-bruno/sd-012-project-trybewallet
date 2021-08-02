import { LOGIN, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  email: '',
  totalExpense: 0,
};

const userLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      totalExpense: state.totalExpense + Number(action.payload.value)
        * Object.values(action.payload.exchangeRates).find(
          (rate) => rate.code === action.payload.currency,
        ).ask,
    };
  default:
    return state;
  }
};

export default userLogin;
