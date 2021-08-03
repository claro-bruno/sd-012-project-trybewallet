// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const INPUT = 'INPUT';

export function loginAction(emailInput) {
  return {
    type: GET_EMAIL,
    email: emailInput,
  };
}

export function expensesAction(expenses) {
  return {
    type: INPUT,
    expenses,
  };
}

export function listAction(currencies) {
  return async (dispatch) => {
    const fethCurrencys = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesJSON = await fethCurrencys.json();
    const currencyList = { exchangeRates: currenciesJSON };
    Object.assign(currencies, currencyList);
    dispatch(expensesAction(currencies));
  };
}
