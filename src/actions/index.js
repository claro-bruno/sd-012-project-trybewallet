export const ADD_USER = 'ADD_USER';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';
export const SAVE_CURRENCY_SUCESS = 'SAVE_CURRENCY_SUCESS';
export const SAVE_CURRENCY_FAILED = 'SAVE_CURRENCY_FAILED';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addUser = (payload) => ({ type: ADD_USER, payload });
export const saveCurrency = () => ({ type: SAVE_CURRENCY });
export const saveCurrencySucess = (payload) => ({ type: SAVE_CURRENCY_SUCESS, payload });
export const saveCurrencyFailed = (payload) => ({ type: SAVE_CURRENCY_FAILED, payload });
export const addExpenses = (payload) => ({ type: ADD_EXPENSES, payload });

export const saveCurrencyThunk = () => async (dispatch) => {
  dispatch(saveCurrency());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await response.json();
    const filter = Object.keys(results).filter((currencies) => currencies !== 'USDT');
    dispatch(saveCurrencySucess(filter));
  } catch (error) {
    dispatch(saveCurrencyFailed(error));
  }
};
