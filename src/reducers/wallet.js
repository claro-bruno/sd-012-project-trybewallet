// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCY } from '../actions/getKeys';
import { SAVE_DATA } from '../actions/saveData';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY:
    return { ...state, currencies: action.currencies };
  case SAVE_DATA:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length },
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
