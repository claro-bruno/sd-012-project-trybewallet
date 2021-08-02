// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { UPDATE_CURRENCY, UPDATE_EXPENSE} from '../actions';

const INITIAL_STATE = {
  expense: [],
  currency: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_CURRENCY:
    return { ...state, currency: [...state.currency, payload] };
  case UPDATE_EXPENSE:
    return { ...state, expense: [...state.expense, payload] };
  default:
    return state;
  }
};

export default wallet;
