// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'ADD_EXPANSE':
    return { ...state, expenses: [...state.expenses, action.value] };
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.value };
  default:
    return state;
  }
}

export default wallet;
