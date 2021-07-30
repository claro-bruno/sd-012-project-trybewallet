const userLogin = (userEmail) => ({
  type: 'userLogin',
  user: {
    email: userEmail,
  },
});

export default userLogin;
