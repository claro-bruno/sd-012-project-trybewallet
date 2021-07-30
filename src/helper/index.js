export const verifyEmail = (email) => {
  const regex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  return regex.test(email);
};

const MIN_LENGTH_PASSWORD = 6;
export const verifyPassword = (password) => (password.length >= MIN_LENGTH_PASSWORD);

export const validatorLogin = ({ email, password }) => (
  verifyEmail(email) && verifyPassword(password)
);

// Links
// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// Rodrigo Merlone
// https://trybecourse.slack.com/archives/C01T2C18DSM/p1627667851053100
// Thalles Carneiro
// https://github.com/tryber/sd-012-project-trybewallet/commit/eca9ba660b15da38212d310b582f9b4be8a73fe1
