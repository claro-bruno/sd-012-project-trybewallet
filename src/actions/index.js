import { STORE_EMAIL, GET_CURRENCIES, STORE_EXPENSE } from './actionsTypes';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const storeEmail = (email) => ({
  type: STORE_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const storeExpense = (expense) => ({
  type: STORE_EXPENSE,
  expense,
});

export const fetchExpenseData = (expense) => async (dispatch) => {
  const response = await fetch(END_POINT);
  const result = await response.json();
  delete result.USDT;
  const expenseUpdated = {
    ...expense,
    exchangeRates: result,
  };
  dispatch(storeExpense(expenseUpdated));
};

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch(END_POINT);
  const result = await response.json();
  // consulta ao repositorio do miguel retroz
  // console.log(result);
  const usdtINdex = Object.keys(result).indexOf('USDT');
  const currencyData = Object.values(result);
  const currencyFilter = currencyData
    .filter((_currencies, index) => index !== usdtINdex);
  // console.log(currencyFilter);
  dispatch(getCurrencies(currencyFilter));
};
