import { EXPENSE_SUBMIT, EXPENSE_FAIL } from '../actions';

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

  default:
    return state;
  }
};

export default wallet;
