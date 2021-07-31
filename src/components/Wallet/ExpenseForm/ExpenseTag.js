import React, { Component } from 'react';

class ExpenseTag extends Component {
  render() {
    const expensesTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label
        htmlFor="payment-tags"
      >
        Tag
        <select
          id="payment-tags"
        >
          { expensesTags.map((tag) => (
            <option
              key={ tag }
            >
              {tag}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default ExpenseTag;
