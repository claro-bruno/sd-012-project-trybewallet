import STORE_EMAIL from './actionTypes';

const storeEmail = (email) => ({
  type: STORE_EMAIL,
  email,
});

export default storeEmail;
