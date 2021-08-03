import React, { Component } from 'react';
import propTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, message, handleChange, value, dataTestid } = this.props;
    return (
      <div>
        <label htmlFor={ dataTestid }>
          { message }
          <input
            data-testid={ `${dataTestid}-input` }
            type={ type }
            id={ dataTestid }
            name={ dataTestid }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  dataTestid: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default Input;
