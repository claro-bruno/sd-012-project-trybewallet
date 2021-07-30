// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addUser = (email) => ({ type: ADD_USER, email });
export const addCurrencies = (currencies) => ({ type: ADD_CURRENCIES, currencies });

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const obj = await request.json();
      const currencies = Object.keys(obj);
      dispatch(addCurrencies(currencies.filter((elem) => elem !== 'USDT')));
    } catch (e) {
      console.log(e);
    }
  }
);
