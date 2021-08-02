import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpenseValueInput extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label
        htmlFor="value-input"
      >
        Valor
        <input
          id="value-input"
          data-testid="value-input"
          type="number"
          name="value"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ExpenseValueInput.propTypes = {
  handleChange: func.isRequired,
};

export default ExpenseValueInput;
