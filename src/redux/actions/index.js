export const loginChange = (value) => ({
  type: 'ADD_LOGIN', value,
});

export const walletChange = (value) => ({
  type: 'WALLET_CHANGE', value,
});

export const wallatError = (error) => ({
  type: 'WALLET_ERROR', error,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then(
        (json) => dispatch(walletChange(json)),
        (error) => dispatch(failedRequest(error)),
      ));
}
