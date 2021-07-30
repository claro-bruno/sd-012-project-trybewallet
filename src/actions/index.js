// Coloque aqui suas actions
export const addUserToState = (email) => ({ type: 'ADD_USER_EMAIL', email });

export const getCurrencies = (currencies) => ({ type: 'REQUEST_CURRENCIES', currencies });

export const fetchCurrencies = () => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((data) => data.json())
    .then((response) => {
      const currencies = Object.keys(response);
      dispatch(getCurrencies(currencies));
    })
);
