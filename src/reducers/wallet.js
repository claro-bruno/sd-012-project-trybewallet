import { EXPENSE_SUBMIT, EXPENSE_FAIL, DELETE_EXPENSE } from '../actions';

const inicialState = {
  expenses: [],
};

const wallet = (state = inicialState, action) => {
  switch (action.type) {
  case EXPENSE_SUBMIT:
    return ({
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.state },
      ],
    });

  case EXPENSE_FAIL:
    return { ...state, error: 'Ocorreu um erro' };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.state),
    };
  /* Referencia do DELETE_EXPENSE: https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state */
  default:
    return state;
  }
};

export default wallet;
