// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES_API_GETSTATE = 'EXPENSES_API_GETSTATE';
export const EXPENSES_API_FAILED = 'EXPENSES_API_FAILED';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const userAction = (state) => ({ type: EMAIL, email: state });

export const currencyAction = (state) => ({ type: CURRENCIES, currencies: [state] });

export const expenseAction = (state) => ({ type: EXPENSES_API_GETSTATE, state });

export const expenseActFailed = (error) => ({ type: EXPENSES_API_FAILED, error });

// action para o caso de falha da resposta da fetch
export const requestFailAct = (error) => ({ type: FAILED_REQUEST, error });

// action para o caso de sucesso de resposta da fetch
export const fetchinDataAct = (json) => ({ type: FETCHING_DATA, currencies: json });

const URL = 'https://economia.awesomeapi.com.br/json/all';
// função que faz a chamada à API e  action que espera a resposta, enquanto permite a renderização de "Loading".
export const fetchApiAction = () => (dispatch) => fetch(URL)
  .then((resp) => resp.json()
    .then(
      (json) => {
        delete json.USDT; // deleta a chave USDT
        dispatch(fetchinDataAct(json));
      }
      ,
    )).catch((err) => dispatch(requestFailAct(err)));

export const fetchForExpense = (stateData) => async (dispatch) => {
  try {
    const resp = await fetch(URL);
    const result = await resp.json();
    console.log(result);
    dispatch(expenseAction({ ...stateData, exchangeRates: result }));
  } catch (error) {
    dispatch(expenseActFailed(error));
  }
};
