import { REQUEST_CURRENCY, SAVE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
  case REQUEST_CURRENCY:
    return { ...state, currencies: action.currencies };
  case SAVE_EXPENSE:
    return { ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length },
      ],
    };
  default: return state;
  }
};

export default userReducer;
