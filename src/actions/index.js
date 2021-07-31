export const TO_LOG = 'TO_LOG';
export const GET_CURRENCY = 'GET_CURRENCY';

export const toLog = (email) => ({ type: TO_LOG, email });

export const getCurrency = (data) => ({ type: GET_CURRENCY, data });
