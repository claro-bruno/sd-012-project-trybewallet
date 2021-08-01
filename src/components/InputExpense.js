import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputExpense extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="expenseValue">
        Valor
        <input
          type="number"
          id="expenseValue"
          name="expenseValue"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputExpense.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputExpense;
