export const GET_EMAIL = 'GET_EMAIL';

export function actionGetEmail(emailInput) {
  return {
    type: GET_EMAIL,
    email: emailInput,
  };
}
