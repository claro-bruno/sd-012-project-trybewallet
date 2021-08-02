// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_DESPESA':
    return { ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.state }] };
  case 'DESPESA_FALHA':
    return { ...state, error: 'erro' };
  default:
    return state;
  }
}

export default wallet;
