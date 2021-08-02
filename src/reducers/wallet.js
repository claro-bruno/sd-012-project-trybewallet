import { EXPENSE, REQUEST_CURRENCY, GET_CURRENCY, ADD_EXPENSE } from '../actions';

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
  case ADD_EXPENSE: {
    const actObj = {
      id: action.id,
      valor: action.valor,
      descricao: action.descricao,
      moeda: action.moeda,
      metodo: action.metodo,
      tag: action.tag,
      exchangeRates: action.exchangeRates,
    };
    return ({
      ...state,
      expenses: [...state.expenses, actObj],
    }); }
  default:
    return state;
  }
}

export default wallet;
