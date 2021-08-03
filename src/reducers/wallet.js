// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_NEW_CURRENCIES':
    return ({ ...state, currencies: [action.state] });
  case 'ADD_NEW_EXPENSE':
    return ({ ...state, expenses: [...state.expenses, action.state] });
  case 'ADD_MOUNT':
    return ({ ...state, total: (state.total + action.state) });
  default:
    return state;
  }
}

export default wallet;
