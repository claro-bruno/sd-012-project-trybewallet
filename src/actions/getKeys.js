import getCurrencyApi from '../data/requestApiKey';

export const CURRENCY = 'CURRENCY';

const currencyAction = (response) => ({
  type: CURRENCY,
  currencies: response,
});

function getKeys() {
  return (dispatch) => {
    // dispatch(currencyAction());
    getCurrencyApi()
      .then((json) => dispatch(currencyAction(json)));
  };
}

export default getKeys;
