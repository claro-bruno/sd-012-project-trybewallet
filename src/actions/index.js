// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';

export function loginAction(emailInput) {
  return {
    type: GET_EMAIL,
    email: emailInput,
  };
}
