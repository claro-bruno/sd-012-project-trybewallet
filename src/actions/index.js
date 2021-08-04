export const EMAIL = 'EMAIL';
export const CURREENCIES_SUCCES = 'CURREENCIES_SUCCES';

export const inputEmail = (payload) => ({ type: EMAIL, payload });
export const currenciesSucces = (payload) => ({ type: CURREENCIES_SUCCES, payload });

export function fetchApi() {
  return (dispacth) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((data) => data.json())
    .then((currencies) => dispacth(currenciesSucces(currencies)));
}
