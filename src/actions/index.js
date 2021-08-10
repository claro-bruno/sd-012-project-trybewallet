// Coloque aqui suas actions
export const USER_INFORMATION = 'USER_INFORMATION';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const GET_EXCHANGE_SUCCES = 'GET_EXCHANGE_SUCCES';
export const GET_EXCHANGE_ERROR = 'GET_EXCHANGE_ERROR';

export const userInformation = (user) => ({
  type: USER_INFORMATION,
  user,
});

export const getExchange = () => ({ type: GET_EXCHANGE });
export const getExchangeSucces = (payload) => ({ type: GET_EXCHANGE_SUCCES, payload });
export const getExchangeError = (error) => ({ type: GET_EXCHANGE_ERROR, error });

export const fetchAPI = () => async (dispatch) => {
  dispatch(getExchange());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    dispatch(getExchangeSucces(currencies));
    return currencies;
  } catch (error) {
    dispatch(getExchangeError(error));
  }
};
