// Coloque aqui suas actions
// import getApi from '../api';

export const GET_MAIL = 'GET_MAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getMail = (email) => ({ type: GET_MAIL, email });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });
