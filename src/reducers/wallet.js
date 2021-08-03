import { ADD_EXPENDITURE } from '../actions';

const INITIAL_STATE = {
  expenditure: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENDITURE:
    return { ...state, expenditure: [...state.expenditure, action.payload] };
  default:
    return state;
  }
}

export default wallet;
