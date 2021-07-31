// import { GET_API, GET_API_SUCESS, GET_API_ERROR } from '../actions/actionApi';

const INITIAL_STATE = {
  data: [],
};

const saveData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_API':
    return { ...state };
  case 'GET_API_SUCESS':
    return { ...state, data: Object.keys(action.data) };
  case 'GET_API_ERROR':
    return { ...state, data: action.payload };
  default:
    return state;
  }
};

export default saveData;
