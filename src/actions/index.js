// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const VALUE_INPUT = 'VALUE_INPUT';

export function loginAction(emailInput) {
  return {
    type: GET_EMAIL,
    email: emailInput,
  };
}

export function valueExpense(valueInput) {
  return {
    type: VALUE_INPUT,
    valueExpenses: valueInput,
  };
}
