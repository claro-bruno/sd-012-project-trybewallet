import { GET_EMAIL, APAGAR } from './actionTypes';

export const actionGetEmail = (value) => ({ type: GET_EMAIL, payload: value });

export const apagar = () => ({ type: APAGAR });
