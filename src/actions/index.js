export const EMAIL = 'EMAIL';
export const CURREENCIES_SUCCES = 'CURREENCIES_SUCCES';
export const EXPENSES = 'EXPENSES';

export const inputEmail = (payload) => ({ type: EMAIL, payload });
export const currenciesSucces = (payload) => ({ type: CURREENCIES_SUCCES, payload });
export const expensesButton = (expenses, data) => ({
  type: EXPENSES,
  payload: { expenses, data },
});

export function fetchApi() {
  return (dispacth) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((data) => data.json())
    .then((currencies) => dispacth(currenciesSucces(currencies)));
}

export const exchangeRates = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((data) => data.json())
);
export const addExpense = (expenses) => (dispacth) => (
  exchangeRates()
    .then((data) => {
      dispacth(expensesButton(expenses, data));
    })
);
