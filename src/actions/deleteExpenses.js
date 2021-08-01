export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const deleteExpenses = (expense) => ({
  type: DELETE_EXPENSE,
  payload: expense,
});

export default deleteExpenses;
