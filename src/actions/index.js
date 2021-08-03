// Coloque aqui suas actions
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';
export const STORE_EXPENSES = 'STORE_EXPENSES';

export const addCurrencies = (state) => ({
  type: ADD_CURRENCIES, currencies: state,
});

export const fetchCurrency = () => async (dispatch) => {
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const fetchAPI = await fetch(API);
  const responseAPI = await fetchAPI.json();
  const codes = Object.entries(responseAPI); // o entries transforma o objeto em array
  const filteredCurrency = codes
    .filter((code) => code[0] !== 'DOGE' && code[0] !== 'USDT')
    .map((entry) => entry[0]);

  dispatch(addCurrencies(filteredCurrency));
};

export const getExpenses = (expenses) => ({
  type: STORE_EXPENSES,
  expenses,
});

// reducer para pegar o valor das asks para fazer o requisito 8
export const totalExpenses = (expense) => async (dispatch) => { // expense é o que o usuario clicar no botão-adicionar-despesa no input do valor
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const fetchAPI = await fetch(API);
  const responseAPI = await fetchAPI.json();
  const newExpense = { ...expense, exchangeRates: responseAPI };
  dispatch(getExpenses(newExpense));
};
