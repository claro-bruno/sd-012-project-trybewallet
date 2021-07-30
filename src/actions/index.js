export const ASYNCACTION_TYPE1 = 'ASYNCACTION_TYPE1';
export const ASYNCACTION_TYPE2 = 'ASYNCACTION_TYPE2';

export const ACTION1 = (payload) => (
  {
    type: ASYNCACTION_TYPE1,
    payload,
  }
);
export const ACTION2 = (payload) => (
  {
    type: ASYNCACTION_TYPE2,
    payload,
  }
);

const someAsyncFunction = async () => 'ducks';

export const ASYNCACTION = (payload) => (dispatch) => {
  dispatch(ACTION1(payload));

  return someAsyncFunction()
    .then((res) => dispatch(ACTION2(res)));
};
