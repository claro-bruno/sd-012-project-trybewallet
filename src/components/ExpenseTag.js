import React from 'react';

export default class ExpenseTag extends React.Component {
  render() {
    return (
      <label htmlFor="currency-select">
        Tag:
        <select name="currency-select" id="currency-select">
          <option value="credit">Alimentação</option>
          <option value="debit">Lazer</option>
          <option value="cash">Trabalho</option>
          <option value="cash">Transporte</option>
          <option value="cash">Saúde</option>

        </select>
      </label>

    );
  }
}
