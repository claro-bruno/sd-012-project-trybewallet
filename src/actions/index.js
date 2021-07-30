// Coloque aqui suas actions
import { createAction } from '../Helpers';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const loginAction = createAction(LOGIN_ACTION);

export const IS_VALID = 'IS_VALID';
export const validLogin = createAction(IS_VALID);
