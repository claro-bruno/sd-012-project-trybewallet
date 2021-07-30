import React, { Component } from 'react';
import propTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, message, handleChange, value } = this.props;
    return (
      <div>
        <label htmlFor={ type }>
          <input
            data-testid={ ` ${message}-input ` }
            type={ type }
            name={ type }
            value={ value }
            placeholder={ message }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default Input;
