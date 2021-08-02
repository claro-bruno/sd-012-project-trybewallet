export const SET_LOGIN = 'SET_LOGIN';
export const SET_CURRENCY = 'SET_CURRENCY';
export const setLogin = (email, pass) => ({ type: SET_LOGIN, email, pass });
export const setCurrency = (currencies) => ({ type: SET_CURRENCY, currencies });

export const fetchCurrency = () => (
  (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((currency) => dispatch(setCurrency(Object.keys(currency)
        .filter((type) => !type.startsWith('USD')))))
  )
);
