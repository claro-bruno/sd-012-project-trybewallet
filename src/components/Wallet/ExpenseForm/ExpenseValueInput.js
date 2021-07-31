import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpenseValueInput extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label
        htmlFor="expense-value"
      >
        Valor
        <input
          id="expense-value"
          type="number"
          name="value"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ExpenseValueInput.propTypes = {
  handleChange: func.isRequired,
};

export default ExpenseValueInput;
