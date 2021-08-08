// Coloque aqui suas actions
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const API_SUCESS = 'API_SUCESS';

export const actionChangeEmail = (state) => ({ type: CHANGE_EMAIL, state });

export const actionAPI = (result) => ({ type: API_SUCESS, result });

export const fetchAPI = () => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((result) => dispatch(actionAPI(result)))
);
