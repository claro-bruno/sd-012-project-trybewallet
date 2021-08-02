import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ getDescribe, getQuantity }) => (
  <>
    <label htmlFor="input-value">
      Valor:
      <input
        id="input-value"
        type="number"
        onChange={ ({ target }) => getQuantity(target.value) }
      />
    </label>
    <label htmlFor="describe-input">
      Descrição:
      <input
        id="describe-input"
        type="text"
        onChange={ ({ target }) => getDescribe(target.value) }
      />
    </label>
  </>
);

Input.propTypes = {
  getDescribe: PropTypes.func.isRequired,
  getQuantity: PropTypes.func.isRequired,
};

export default Input;
