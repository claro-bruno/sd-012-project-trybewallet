export const verifyEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const verifyPassword = (password) => {
  const minLengthPassword = 6;
  if (password.length >= minLengthPassword) {
    return true;
  }
  return false;
};
