import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValue extends Component {
  render() {
    const { valueExpense, handleChange } = this.props;
    return (
      <label htmlFor="value-expense">
        Valor
        <input
          id="value-expense"
          name="valueExpense"
          onChange={ handleChange }
          type="number"
          value={ valueExpense }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  handleChange: PropTypes.func,
  valueExpense: PropTypes.number,
}.isRequired;

export default InputValue;
