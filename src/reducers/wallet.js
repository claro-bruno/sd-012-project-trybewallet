import { EXPENSE, REQUEST_CURRENCY, GET_CURRENCY } from '../actions';

const initialState = {
  expenses: [],
  currencies: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
    });
  case REQUEST_CURRENCY:
    return ({
      ...state,
      currencies: ['loading...'],
    });
  case GET_CURRENCY: {
    const curObj = action.payload;
    const curList = Object.keys(curObj);
    const noTradeCur = curList.filter((e) => e !== 'USDT');
    return ({
      ...state,
      currencies: [...noTradeCur],
    }); }
  default:
    return state;
  }
}

export default wallet;
