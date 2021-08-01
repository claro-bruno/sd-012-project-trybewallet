export const addExpense = (expenses, newExpense) => (!expenses.length
  ? [{ ...newExpense, id: 0 }]
  : [...expenses.map((expense, index) => ({ ...expense, id: index })),
    { ...newExpense, id: expenses.length }]);

export const removeExpense = (expenses, idExpense) => (
  [...expenses
    .filter((expense) => expense.id !== idExpense)]
);

export const saveEditedExpense = (expenses, newExpense) => (
  [...expenses.map((expense) => (
    expense.id === newExpense.id ? newExpense : expense
  ))]
);
