import { CUR_WALLET, EXP_WALLET, DEL_WALLET } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, currencies, expenses, id }) => {
  switch (type) {
  case CUR_WALLET:
    return {
      ...state,
      currencies: Object.keys(currencies).filter((item) => (item !== 'USDT')),
    };

  case EXP_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, expenses],
    };

  case DEL_WALLET:
    return {
      ...state,
      expenses: state.expenses.filter((item) => (item.id !== parseInt(id, 0))),
    };

  default:
    return state;
  }
};
export default wallet;
