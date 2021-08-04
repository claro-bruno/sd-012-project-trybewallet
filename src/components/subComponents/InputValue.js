import React from 'react';
import PropTypes from 'prop-types';

const InputValue = (props) => {
  const { onChange, value } = props;

  return (
    <label htmlFor="value-input">
      Valor:
      <input
        type="number"
        name="value"
        id="value-input"
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
};

export default InputValue;

InputValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
