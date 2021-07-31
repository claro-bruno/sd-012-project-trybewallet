import React, { Component } from 'react';

class ExpenseCurrencyInput extends Component {
  render() {
    return (
      <label
        htmlFor="currencies"
      >
        Moeda
        <select
          id="currencies"
        >
          <option>
            BRL
          </option>
        </select>
      </label>
    );
  }
}

export default ExpenseCurrencyInput;
