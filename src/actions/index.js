// Coloque aqui suas actions
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const API_SUCESS = 'API_SUCESS';
export const ADD_RATES = 'ADD_RATES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const actionChangeEmail = (state) => ({ type: CHANGE_EMAIL, state });

export const actionAPI = (result) => ({ type: API_SUCESS, result });

export const addExpenses = (state) => ({ type: ADD_EXPENSES, state });

export const fetchAPI = () => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((result) => dispatch(actionAPI(result)))
);

export const addRates = (state) => ({ type: ADD_RATES, state });
