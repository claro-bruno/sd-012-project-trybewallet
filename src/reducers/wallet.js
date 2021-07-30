import { EXPENSE_SUBMIT } from '../actions';

const inicialState = {
  expenses: [],
};

const wallet = (state = inicialState, action) => {
  switch (action.type) {
  case EXPENSE_SUBMIT:
    return ({ expenses: [...action.state] });
  default:
    return state;
  }
};

export default wallet;
