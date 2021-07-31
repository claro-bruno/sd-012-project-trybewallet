import { SAVE_COINS, ADD_EXPENSE, DELETE_EXPENSE,
  UPDATE_STATE, EDIT_ITEM, START_EDIT } from '../actions';

const INITIAL_STATE = {
  wallet: [{}],
  expenses: [],
  edit: false,
  editing: 999,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COINS:
    return { ...state, wallet: [action.payload] };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload),
    };
  case UPDATE_STATE:
    return {
      ...state,
      expenses: state.expenses.map((item, index) => {
        item.id = index;
        return item;
      }) };
  case START_EDIT:
    return { ...state, edit: true, editing: action.payload };
  case EDIT_ITEM:
    return {
      ...state,
      edit: false,
      editing: 999,
      expenses: state.expenses.map((item) => {
        if (item.id === action.payload.id) {
          item.value = action.payload.value;
          item.currency = action.payload.currency;
          item.description = action.payload.description;
          item.method = action.payload.method;
          item.tag = action.payload.tag;
          item.exchangeRates = action.payload.exchangeRates;
        }
        return item;
      }) };
  default:
    return state;
  }
};

export default wallet;
