import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpenseDescriptionInput extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label
        htmlFor="expense-description"
      >
        Descrição
        <input
          id="expense-description"
          type="text"
          name="description"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ExpenseDescriptionInput.propTypes = {
  handleChange: func.isRequired,
};

export default ExpenseDescriptionInput;
