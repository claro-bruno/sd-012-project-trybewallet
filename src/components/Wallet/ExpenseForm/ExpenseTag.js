import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpenseTag extends Component {
  render() {
    const { handleChange } = this.props;
    const expensesTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label
        htmlFor="tag-input"
      >
        Tag
        <select
          id="tag-input"
          data-testid="tag-input"
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
