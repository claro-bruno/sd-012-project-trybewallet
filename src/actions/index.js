// Coloque aqui suas actions
export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  payload: email,
});

export const newCurrencies = (currencies) => ({
  type: 'NEW_CURRENCIES',
  payload: currencies,
});

export const newExpenses = (expenses) => ({
  type: 'NEW_EXPENSES',
  payload: expenses,
});

export const fetchCurrency = (state) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(newExpenses({ ...state, exchangeRates: response })))
);

// Requisito 1 concluído baseado no código do colega Kevin Oliveira: https://github.com/tryber/sd-012-project-trybewallet/pull/6/commits/30ed4b0545dc5546a4ad5345ca799c28654503a4
// e com algumas orientações do colega Rodrigo Facury;
