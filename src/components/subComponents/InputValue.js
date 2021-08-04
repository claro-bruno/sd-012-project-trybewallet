import React from 'react';
import PropTypes from 'prop-types';

const InputValue = (props) => {
  const { onChange } = props;

  return (
    <label htmlFor="value">
      Valor:
      <input type="text" name="Valor" id="value" onChange={ onChange } />
    </label>
  );
};

export default InputValue;

InputValue.propTypes = {
  onChange: PropTypes.func.isRequired,
};
