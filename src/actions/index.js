// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const FETCHING_DATA = 'FETCHING_DATA';
export const AWAITING_DATA = 'AWAITING_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const userAction = (state) => ({
  type: EMAIL,
  email: state,
});

export const currencyAction = (state) => ({
  type: CURRENCIES,
  currencies: [state],
});

export const expenseAction = (state) => ({
  type: EXPENSES,
  expenses: [state],
});

// action para o caso de espera da resposta da fetch
export const awaitDataAct = () => ({
  type: AWAITING_DATA,
});

// action para o caso de falha da resposta da fetch
export const requestFailAct = (error) => ({
  type: FAILED_REQUEST,
  error,
});

// action para o caso de sucesso de resposta da fetch
export const fetchinDataAct = (json) => ({
  type: FETCHING_DATA,
  currencies: json,
});

// função que faz a chamada à API e  action que espera a resposta, enquanto permite a renderização de "Loading".
export const fetchContainUrl = () => (dispatch) => {
  dispatch(awaitDataAct());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resp) => resp.json()
      .then(
        (json) => {
          delete json.USDT; // deleta a chave USDT
          dispatch(fetchinDataAct(json));
        }
        ,
      )).catch((err) => dispatch(requestFailAct(err)));
};
