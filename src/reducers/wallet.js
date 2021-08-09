import { ADD_NEW_EXPENSE, DELETE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_NEW_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: 'pensar numa lógica para deletar a despesa',
    };
  default:
    return state;
  }
};

export default wallet;
