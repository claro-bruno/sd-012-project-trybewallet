export const STATE = 'STATE';
// Coloque aqui suas actions
export const emailAction = (value) => ({ type: 'EMAIL', value });
export const emailActioan = (value) => ({ type: 'EMAIL', value });

// Wallet actions

export function stateAction(value) {
  return { type: STATE, value };
}

export function fetchCurrencies(currencies) {
  return async (dispatch) => {
    const fetchUrl = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchUrl.json();
    const actualCurrencies = { exchangeRates: response };
    Object.assign(currencies, actualCurrencies);
    dispatch(stateAction(currencies));
  };
}
