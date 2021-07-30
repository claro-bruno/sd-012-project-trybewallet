import { HANDLE_EXPENSE_FORM_INPUTS, INCREASE_ID, EDIT_EXPENSE_VALUE } from '../actions';

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

const form = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HANDLE_EXPENSE_FORM_INPUTS:
    return {
      ...state,
      [action.name]: action.value,
    };
  case INCREASE_ID:
    return {
      ...state,
      id: state.id + 1,
    };
  case EDIT_EXPENSE_VALUE:
    return {
      ...state,
      id: action.payload.id,
      value: action.payload.value,
      description: action.payload.description,
      currency: action.payload.currency,
      method: action.payload.method,
      tag: action.payload.tag,
    };
  default:
    return state;
  }
};

export default form;
