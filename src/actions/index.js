export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (payload) => ({
  type: 'USER_LOGIN',
  payload,
});

// export const ADD_EXPENSES = 'ADD_EXPENSES';
// export const AddExpenses = (expenses, id) => ({
//   type: 'ADD_EXPENSES',
//   expenses,
//   id,
// });

export const REQUEST_API = 'REQUEST_API';
export const requestAPI = () => ({
  type: 'REQUEST_API',
});

export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const requestAPISuccess = (payload) => ({
  type: 'REQUEST_API_SUCCESS',
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json(response);
  dispatch(requestAPISuccess(Object.keys(result)
    .filter((currency) => currency !== 'USDT')));
};
