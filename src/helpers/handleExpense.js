export const addExpense = (expenses, newExpense) => (!expenses.length
  ? [{ ...newExpense, id: 0 }]
  : [...expenses.map((expense, index) => ({ ...expense, id: index })),
    { ...newExpense, id: expenses.length }]);

export const removeExpense = (expenses, idExpense) => (
  [...expenses
    .filter((expense) => expense.id !== idExpense)]
);

export const getExpenseEditable = (expenses, idExpense) => ({
  ...expenses.find((expense) => expense.id === idExpense),
});

export const saveEditedExpense = (expenses, newExpense) => (
  [...expenses.map((expense) => (
    expense.id === newExpense.id ? { ...expense, ...newExpense } : expense
  ))]
);
