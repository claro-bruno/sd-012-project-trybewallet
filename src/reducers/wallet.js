// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  nextId: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, currencies: action.currencies };

  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.newExpense],
      nextId: action.ID + 1 };

  case 'REMOVE_EXPENSE':
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.ID) };

  default:
    return state;
  }
}

export default wallet;
