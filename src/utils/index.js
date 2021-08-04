/**
 * Consultei o repositório de um projeto em conjunto com o Márcio Daniel, que fez essa parte da validação.
 * https://github.com/grupo-de-estudos-T08/trivia-programming/blob/master/frontend/src/utils/index.js
 */
export const verifyEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(email);
};

const MIN_LENGTH_PASSWORD = 6;
export const verifyPassword = (password) => (password.length >= MIN_LENGTH_PASSWORD);

export const validatorLogin = ({ email, password }) => (
  verifyEmail(email) && verifyPassword(password));
