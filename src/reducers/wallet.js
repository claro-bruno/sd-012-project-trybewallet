// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_ACTION,
  RECEIVE_ACTION,
  ADD_EXPENSE_ACTION,
  REMOVE_EXPENSE_ACTION,
  SELECT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  id: 0,
  currencies: [],
  currencieNames: [],
  expenses: [],
  currency: 'BRL',
  loading: false,
  selected: null,
  status: 'add',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_ACTION:
    return ({
      ...state,
      loading: true,
    });
  case RECEIVE_ACTION:
    return ({
      ...state,
      currencieNames: Object.keys(action.payload),
      currencies: action.payload,
      loading: false,
    });
  case ADD_EXPENSE_ACTION:
    return ({
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        { id: action.payload.id,
          ...action.payload.expense,
          exchangeRates: state.currencies,
        }],
    });
  case REMOVE_EXPENSE_ACTION:
    return ({
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    });
  case SELECT_EXPENSE:
    return ({
      ...state,
      selected: action.payload,
      status: 'edit',
    });
  default:
    return state;
  }
};

// const wallet = createReducer(INITIAL_STATE, (builder) => {
//   builder.addCase(REQUEST_ACTION, (state) => ({
//     ...state,
//     loading: true,
//   }));
//   builder.addCase(RECEIVE_ACTION, (state, action) => ({
//     ...state,
//     currencieNames: Object.keys(action.payload),
//     currencies: action.payload,
//     loading: false,
//   }));
//   builder.addCase(ADD_EXPENSE_ACTION, (state, action) => ({
//     ...state,
//     id: state.id + 1,
//     expenses: [...state.expenses,
//       { id: action.payload.id,
//         ...action.payload.expense,
//         exchangeRates: state.currencies,
//       }],
//   }));
//   builder.addCase(REMOVE_EXPENSE_ACTION, (state, action) => {
//     const newExpenses = [];
//     for (let i = 0; i < state.expenses.length; i += 1) {
//       if (state.expenses[i].id !== action.payload) {
//         newExpenses.push(state.expenses[i]);
//       }
//     }
//     return ({
//       ...state,
//       expenses: newExpenses,
//     });
//   });
//   builder.addDefaultCase((state) => state);
// });

export default wallet;
