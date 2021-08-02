import PropTypes from 'prop-types';
import React from 'react';

function InputValue(props) {
  const { value, handleChange } = props;
  return (
    <form>
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          type="text"
          value={ value }
          name="value"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

InputValue.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputValue;
