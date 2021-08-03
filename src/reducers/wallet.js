import { REQUEST_CURRENCY } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, currencies: action.payload };
  default: return state;
  }
};

export default userReducer;
