import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpenseDescriptionInput extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label
        htmlFor="description-input"
      >
        Descrição
        <input
          id="description-input"
          data-testid="description-input"
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
