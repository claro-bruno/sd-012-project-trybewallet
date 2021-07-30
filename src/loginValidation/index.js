/** Consulta feita ao repositório de Thalles Carneiro em https://github.com/tryber/sd-012-project-trybewallet/pull/51/files */

export const emailValidator = (email) => {
  const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  return regex.test(email); // retorna true ou false.
};

const MIN_LENGTH_PASSWORD = 6;
export const passwordValidator = (password) => (password.length >= MIN_LENGTH_PASSWORD); // retorna true ou false.

export const validatorLogin = ({ email, password }) => (
  emailValidator(email) && passwordValidator(password)
);
