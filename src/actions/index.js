export const SAVE_EMAIL = 'SAVE_EMAIL';
export const API_FETCH = 'API_FETCH';
export const API_FETCH_SUCCESS = 'API_FETCH_SUCCESS';
// Coloque aqui suas actions
export const user = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const fetching = () => ({
  type: API_FETCH,
});

export const fetchingSuccess = (currencies) => ({
  type: API_FETCH_SUCCESS,
  currencies,
});

// export function fetchCurrencies() {
//   return (dispatch) => {
//     dispatch(fetching());
//     return fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((currencies) => dispatch(fetchingSuccess(currencies)));
//   };
// }
