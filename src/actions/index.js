export const ENTRY_USER = 'ENTRY_USER';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';
export const SAVE_CURRENCY_SUCESS = 'SAVE_CURRENCY_SUCESS';
export const SAVE_CURRENCY_ERROR = 'SAVE_CURRENCY_ERROR';
export const ADD_EXPENDITURE = 'ADD_EXPENDITURE';

export const entryUser = (email) => ({ type: ENTRY_USER, email });
export const saveCurrency = () => ({ type: SAVE_CURRENCY });
export const saveCurrencySucess = (payload) => ({ type: SAVE_CURRENCY_SUCESS, payload });
export const saveCurrencyError = (payload) => ({ type: SAVE_CURRENCY_ERROR, payload });
export const addExpenditure = (payload) => ({ type: ADD_EXPENDITURE, payload });
