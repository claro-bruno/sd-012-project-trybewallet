import { GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE_TO_STORE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  INSERT_EDITED_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currencyList: [],
  isLoading: false,
  error: null,
  expenseToEdit: undefined,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };

  case GET_CURRENCIES_SUCCESS:
    return { ...state,
      currencies: action.payload1,
      isLoading: false,
      currencyList: action.payload2,
    };

  case GET_CURRENCIES_ERROR:
    return { ...state, error: action.err, isLoading: false };

  case ADD_EXPENSE_TO_STORE:
    return { ...state, expenses: [...state.expenses, action.payload] };

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => action.payload !== id),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      expenseToEdit: state.expenses.find((expense) => action.payload === expense.id),
    };

  case INSERT_EDITED_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(({ id }) => action.payload.id !== id),
        action.payload,
      ],
      expenseToEdit: undefined,
    };

  default:
    return state;
  }
};

export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
