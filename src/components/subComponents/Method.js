import React from 'react';
import PropTypes from 'prop-types';

const SelectMethod = (props) => {
  const { onChange, method } = props;

  return (
    <label htmlFor="payment-select">
      Método de pagamento:
      <select
        id="payment-select"
        name="method"
        value={ method }
        onChange={ onChange }
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
  );
};

export default SelectMethod;

SelectMethod.propTypes = {
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};
