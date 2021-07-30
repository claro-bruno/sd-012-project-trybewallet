import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { id, type, value, change, name, placeholder } = props;
  return (
    <label htmlFor={ id }>
      <input
        placeholder={ placeholder }
        id={ id }
        type={ type }
        data-testid={ id }
        value={ value }
        onChange={ change }
        name={ name }
      />
    </label>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
