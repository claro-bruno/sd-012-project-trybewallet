export const EXPENSES = 'EXPENSES';

const getExpenses = (expenses) => ({ type: EXPENSES, expenses });

export default getExpenses;
