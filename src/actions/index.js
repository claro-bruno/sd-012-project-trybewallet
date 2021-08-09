// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const EXPENSE_FORM_ACTION = 'EXPENSE_FORM_ACTION';
export const EXCHANGE_RATE = 'EXCHANGE_RATE';

export const addEmailInput = (emailInput) => ({
  type: EMAIL,
  payload: emailInput,
});

export const expenseFormAction = (expenses) => ({
  type: EXPENSE_FORM_ACTION,
  payload: expenses,
});

// export const exchangeRatesRequisitionAction = () => ({
//   type: EXCHANGE_RATE,
// });

export function exchangeRatesThunk(expensesObj) {
  return async (dispatch) => {
    // dispatch(exchangeRatesRequisitionAction());
    try {
      const fetchExchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all');
      const request = await fetchExchangeRates.json();
      expensesObj.exchangeRates = request; // criei uma chave no objeto q chegou
      dispatch(expenseFormAction(expensesObj));
    } catch (error) {
      console.log('error');
    }
  };
}
