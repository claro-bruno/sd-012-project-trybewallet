export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const RMV_EXPENSE = 'RMV_EXPENSE';
export const EDT_EXPENSE = 'EDT_EXPENSE';
export const REPLACE_EXPENSE = 'REPLACE_EXPENSE';

export const addUser = (email) => ({ type: ADD_USER, email });
export const addCurrencies = (currencies) => ({ type: ADD_CURRENCIES, currencies });
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });
export const rmvExpense = (id) => ({ type: RMV_EXPENSE, id });
export const edtExpense = (expense) => ({ type: EDT_EXPENSE, expense });
export const replaceExpense = (expense) => ({ type: REPLACE_EXPENSE, expense });

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const obj = await request.json();
      delete obj.USDT;
      dispatch(addCurrencies(obj));
    } catch (e) {
      console.log(e);
    }
  }
);
