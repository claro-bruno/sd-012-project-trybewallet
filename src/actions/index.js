export const actionSaveEmail = (email) => ({ type: 'EMAIL', value: email });

export const actionGetCurrencies = () => ({ type: 'GET_CURRENCIES' });

export function actionGetCurrenciesSuccess(currencies) {
  return { type: 'GET_CURRENCIES_SUCCESS', value: currencies };
}

export function actionGetCurrenciesError(error) {
  return { type: 'GET_CURRENCIES_ERROR', value: error };
}

export const fetchAPI = () => async (dispatch) => {
  dispatch(actionGetCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const obj = await response.json();
  const currencies = Object.keys(obj).filter((currency) => currency !== 'USDT');
  dispatch(actionGetCurrenciesSuccess(currencies));
};

export const actionSaveExpense = (expense) => ({ type: 'EXPENSE', value: expense });
