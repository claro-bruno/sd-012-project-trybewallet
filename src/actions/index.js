// Coloque aqui suas actions
export const login = (value) => ({ type: 'LOGIN', value });
export const addExpense = (value) => ({ type: 'ADD_EXPANSE', value });
export const removeExpense = (value) => ({ type: 'REMOVE_EXPENSE', value });
export const getCurrencies = (value) => ({ type: 'GET_CURRENCIES', value });

export const fetchAPI = () => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((data) => dispatch(getCurrencies(data)));
};
