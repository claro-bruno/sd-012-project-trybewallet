import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ name, callback, type }) {
  const forUse = name.toLowerCase();

  return (
    <label htmlFor={ `${forUse}-input` }>
      {name}
      <input
        onChange={ callback }
        type={ type }
        name={ forUse }
        id={ `${forUse}-input` }
        data-testid={ `${forUse}-input` }
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
