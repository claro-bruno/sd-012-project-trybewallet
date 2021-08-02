const changeUser = (email) => ({
  type: 'CHANGE_USER',
  value: email,
});

const getCurrencies = (json) => {
  console.log('get!');
  return {
    type: 'GET_CURRENCIES',
    payload: json.message,
  };
};

const requestCurrencies = () => {
  console.log('request!');
  return { type: 'REQUEST_CURRENCIES' };
};

const failedRequest = (error) => {
  console.log('failed!');
  return { type: 'FAILED_REQUEST', payload: error };
};

// prettier-ignore
export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all').then((r) => r.json().then(
    (json) => dispatch(getCurrencies(json)),
    (error) => dispatch(failedRequest(error)),
  ));
};

export default changeUser;
