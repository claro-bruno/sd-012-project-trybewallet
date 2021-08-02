import { currencyAction } from '../actions/index';

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyApi = () => async (dispatch) => {
  const response = await fetch(END_POINT);
  const responseJson = await response.json();
  const currencies = Object.keys(responseJson).filter((curr) => curr !== 'USDT');
  return dispatch(currencyAction(currencies));
};

export default getCurrencyApi;
