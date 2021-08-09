import { combineReducers } from 'redux';
import user from './user';
import fetching from './fetching';
import currencies from './currencies';
import expenses from './expenses';
import expenseEdit from './expenseEdit';
import totalExpense from './totalExpense';

const rootReducer = combineReducers({
  user,
  wallet: combineReducers({
    fetching,
    currencies,
    expenses,
    expenseEdit,
    totalExpense,
  }),
});

export default rootReducer;
