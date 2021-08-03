import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValue extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value-expense">
        Valor
        <input
          id="value-expense"
          name="value"
          onChange={ handleChange }
          type="number"
          value={ value }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.number,
}.isRequired;

export default InputValue;
