export const WRITE_EMAIL = 'WRITE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const userLogIn = (payload) => ({ type: WRITE_EMAIL, payload });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });
