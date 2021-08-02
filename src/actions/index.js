export const USER_LOGIN = 'USER_LOGIN';
export const WALLET_REQUEST_MOEDAS = 'WALLET_REQUEST_MOEDAS';
export const WALLET_RECEIVED_MOEDAS = 'WALLET_RECEIVED_MOEDAS';
export const WALLET_FAILED_MOEDAS = 'WALLET_FAILED_MOEDAS';

export const userLogin = (email, senha) => ({
  type: USER_LOGIN,
  email,
  senha,
});

export const reqMoedas = () => ({
  type: WALLET_REQUEST_MOEDAS,
});

export const sucessMoedas = (data) => ({
  type: WALLET_RECEIVED_MOEDAS,
  data,
});

export const failedMoedas = () => ({
  type: WALLET_FAILED_MOEDAS,
});

export function thunkCurrencies() {
  return async (dispatch) => {
    dispatch(reqMoedas());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(sucessMoedas(data));
    } catch (error) {
      return dispatch(failedMoedas());
    }
  };
}
