export default function userState(a, b) {
  return {
    type: 'user_state',
    payload: [a, b],
  };
}
