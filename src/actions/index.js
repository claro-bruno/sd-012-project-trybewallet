export const SUBMIT_EMAIL = 'SUBMIT_EMAIL';
export const submitEmail = (email) => ({ type: SUBMIT_EMAIL, payload: email });

export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const fetchCurrencySuccess = (curr) => ({ type: CURRENCY_SUCCESS, payload: curr });

export const CURRENCY_ERROR = 'CURRENCY_SUCCESS';
export const fetchCurrencyError = (error) => ({ type: CURRENCY_SUCCESS, payload: error });

export const fetchCurrency = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const request = await fetch(URL);
    const response = await request.json();
    const responseFiltred = Object.keys(response).filter((curr) => curr !== 'USDT');
    return dispatch(fetchCurrencySuccess(responseFiltred));
  } catch (error) {
    return dispatch(fetchCurrencyError(error));
  }
};

export const FETCH_EXPENSE_SUCCESS = 'FETCH_EXPENSE_SUCCESS';
const fetchExpenseSuccess = (expense) => ({
  type: FETCH_EXPENSE_SUCCESS, payload: expense,
});

export const FETCH_EXPENSE_ERROR = 'FETCH_EXPENSE_ERROR';
const fetchExpenseError = (error) => ({ type: FETCH_EXPENSE_ERROR, payload: error });

export const fetchExpense = (userExpense) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const request = await fetch(URL);
    const response = await request.json();
    return dispatch(fetchExpenseSuccess({ ...userExpense, exchangeRates: response }));
  } catch (error) {
    return dispatch(fetchExpenseError(error));
  }
};
