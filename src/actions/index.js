export const SAVE_USER = 'SAVE_USER';

export const saveUserAction = (email) => (
  {
    type: SAVE_USER,
    payload: email,
  }
);

// const someAsyncFunction = async () => 'ducks';

// export const ASYNCACTION = (payload) => (dispatch) => {
//   dispatch(ACTION1(payload));

//   return someAsyncFunction()
//     .then((res) => dispatch(ACTION2(res)));
// };
