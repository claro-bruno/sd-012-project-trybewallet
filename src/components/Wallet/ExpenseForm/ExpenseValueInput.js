import React, { Component } from 'react';

class ExpenseValueInput extends Component {
  render() {
    return (
      <label
        htmlFor="expense-value"
      >
        Valor
        <input
          id="expense-value"
          type="number"
        />
      </label>
    );
  }
}

export default ExpenseValueInput;
