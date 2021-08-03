import {
  ADD_EXPENSE,
  ADD_EXPENSE_SUCCESS,
  DELETE_EXPENSE,
  EDIT,
  EDIT_EXPENSE,
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES: return state;
  case REQUEST_CURRENCIES_SUCCESS:
    return { ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  case ADD_EXPENSE: return state;
  case ADD_EXPENSE_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: action.expenseId,
          ...action.expenseInfo,
          exchangeRates: action.apiData,
        },
      ],
    };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.id)),
    };
  case EDIT:
    return { ...state,
      editor: true,
      idToEdit: action.idToEdit,
    };
  case EDIT_EXPENSE:
    return { ...state,
      editor: false,
      expenses: state.expenses.map((expense, index) => {
        if (index === state.idToEdit) {
          return {
            ...expense,
            ...action.expenseInfo,
          };
        }
        return expense;
      }),
    };
  default: return state;
  }
};

export default wallet;
