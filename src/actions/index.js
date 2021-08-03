// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const actionEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});
// ------------ Actions Wallet ----->
export const GET_WALLET = 'GET_WALLET';
export const GET_SUCESS = 'GET_SUCESS';
export const GET_FAILL = 'GET_FAILL';

export const getWallet = () => ({ type: GET_WALLET });
export const getSecess = () => ({ type: GET_SUCESS });
export const getFaill = () => ({ type: GET_FAILL });

export const fetchAPI = () => (dispatch) => {
  dispatch(getWallet());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((response) => console.log(response));
};
