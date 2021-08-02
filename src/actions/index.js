const endPoint = 'https://economia.awesomeapi.com.br/json/all';

export const SAVE_USER = 'SAVE_USER';

export function saveUser(user) {
  return { type: SAVE_USER, payload: user };
}
//-------
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export function requestCurrency(currency) {
  console.log(currency);
  return { type: REQUEST_CURRENCY, payload: currency };
}
//-------
export const getApiCurrency = () => async (dispatch) => {
  const response = await fetch(endPoint);
  const currency = await response.json();
  const filteredCurrencies = Object.keys(currency).filter((USDT) => USDT !== 'USDT');
  dispatch(requestCurrency(filteredCurrencies));
  return filteredCurrencies;
};
