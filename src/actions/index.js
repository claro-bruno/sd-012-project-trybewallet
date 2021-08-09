const endPoint = 'https://economia.awesomeapi.com.br/json/all';

export const SAVE_USER = 'SAVE_USER';

export function saveUser(user) {
  return { type: SAVE_USER, payload: user };
}

//------

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export function requestCurrency(currency) {
  console.log(currency);
  return { type: REQUEST_CURRENCY, currencies: currency };
}

export const getCurrencyApi = async () => {
  const data = await fetch(endPoint);
  const response = await data.json();
  const keys = Object.keys(response).filter((crr) => crr !== 'USDT');
  return keys;
};

export function getKeys() {
  return (dispatch) => {
    getCurrencyApi().then((json) => dispatch(requestCurrency(json)));
  };
}

// --------------------
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export function saveExpense(newCurrencies) { // despesas
  console.log(newCurrencies);
  return { type: SAVE_EXPENSE, payload: newCurrencies };
}

const requestApi = async () => {
  const response = await fetch(endPoint);
  const responseJson = await response.json();
  delete responseJson.USDT;
  return responseJson;
};

export const saveData = (currencies) => async (dispatch) => {
  const response = await requestApi();
  const newCurrencies = { ...currencies, exchangeRates: response };
  dispatch(saveExpense(newCurrencies));
};

// ----------
// export const getApiCurrency = () => async (dispatch) => {
//   const response = await fetch(endPoint);
//   const currency = await response.json();
//   const filteredCurrencies = Object.keys(currency).filter((USDT) => USDT !== 'USDT');
//   dispatch(requestCurrency(filteredCurrencies));
//   return filteredCurrencies;
// };
// // -------------

// export const requestApi = async () => {
//   const fetchApi = await fetch(endPoint);
//   const response = await fetchApi.json();
//   delete response.USDT;
//   return response;
// };

//------
// export const SAVE_EXPENSE = 'SAVE_EXPENSE';

// export function saveExpense(expense) {
//   return { type: SAVE_EXPENSE, payload: expense };
// }

// export const saveData = (expense) => async (dispatch) => {
//   const exchange = await requestApi();
//   const exchangeCurr = { ...expense, exchangeRates: exchange };
//   dispatch(saveExpense(exchangeCurr));
// };
