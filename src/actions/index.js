export const USER_LOGIN = 'USER_LOGIN';
export const WALLET_USER_EXPENSE = 'WALLET_USER_EXPENSE';
export const REQ_EXCHANGE_R = 'REQ_EXCHANGE_R';
export const REC_EXCHANGE_R = 'REC_EXCHANGE_R';
export const ERR_EXCHANGE_R = 'ERR_EXCHANGE_R';

export const userLogin = (email, senha) => ({
  type: USER_LOGIN,
  email,
  senha,
});

export const userExpense = (expense) => ({
  type: WALLET_USER_EXPENSE,
  expense,
});

export const reqExchangeR = () => ({
  type: REQ_EXCHANGE_R,
});

export const recExchangeR = () => ({
  type: REC_EXCHANGE_R,
});

export const errExchangeR = () => ({
  type: ERR_EXCHANGE_R,
});

export function thunkExchange(obj) {
  return async (dispatch) => {
    dispatch((reqExchangeR()));
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      obj.exchangeRate = data;
      return dispatch(userExpense(obj));
    } catch (error) {
      console.error(error);
      return dispatch(errExchangeR());
    }
  };
}
