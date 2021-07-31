import React, { Component } from 'react';

class ExpenseDescriptionInput extends Component {
  render() {
    return (
      <label
        htmlFor="expense-description"
      >
        Descrição
        <input
          id="expense-description"
          type="text"
        />
      </label>
    );
  }
}

export default ExpenseDescriptionInput;
