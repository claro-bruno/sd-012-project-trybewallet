import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpenseTag extends Component {
  render() {
    const { handleChange } = this.props;
    const expensesTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label
        htmlFor="payment-tags"
      >
        Tag
        <select
          id="payment-tags"
          name="tag"
          onChange={ handleChange }
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

ExpenseTag.propTypes = {
  handleChange: func.isRequired,
};

export default ExpenseTag;
