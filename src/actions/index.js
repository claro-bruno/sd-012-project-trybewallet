export const TO_LOG = 'TO_LOG';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const toLog = (email) => ({ type: TO_LOG, email });

export const getCurrency = (data) => ({ type: GET_CURRENCY, data });

export const saveExpense = (expense) => ({ type: SAVE_EXPENSE, expense });

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });
