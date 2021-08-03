export const SET_LOGIN = 'SET_LOGIN';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_EXPENSE = 'SET_EXPENSE';
export const SET_TOTAL = 'SET_TOTAL';
export const REM_SPENT = 'REM_SPENT';
export const setLogin = (email, pass) => ({ type: SET_LOGIN, email, pass });
export const setCurrency = (currencies) => ({ type: SET_CURRENCY, currencies });
export const setExpense = (state) => ({ type: SET_EXPENSE, state });
export const setTotal = (total) => ({ type: SET_TOTAL, total });
export const remSpent = (id) => ({ type: REM_SPENT, id });

export const fetchCurrency = () => (
  (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((currency) => dispatch(setCurrency(Object.keys(currency)
        .filter((type) => !type.startsWith('USD')))))
  )
);
