// Coloque aqui suas actions
const TYPE_EMAIL = 'EMAIL';
const TYPE_PASSWORD = 'PASSWORD';
const TYPE_BUTTON = 'BUTTON';

export const actionUserEmail = (isValid) => ({
  type: TYPE_EMAIL,
  isValid,
});

export const actionUserPassword = (passwordValidator) => ({
  type: TYPE_PASSWORD,
  isValid: passwordValidator,
});

export const actionEntrarButton = (email) => ({
  type: TYPE_BUTTON,
  email,
});
