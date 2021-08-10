import React, { Component } from 'react';

class ExpenseAmount extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-value">
          Valor
          <input
            id="input-value"
            placeholder="adicionar valor da despesa"
          />
        </label>
      </div>
    );
  }
}

export default ExpenseAmount;
