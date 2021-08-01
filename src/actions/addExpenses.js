export const ADD_EXPENSE = 'ADD_EXPENSE';

const addExpenses = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export default addExpenses;
