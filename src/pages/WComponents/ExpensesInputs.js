import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesInputs extends Component {
  render() {
    const { value, description, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            id="value-input"
            data-testid="value-input"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ExpensesInputs.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ExpensesInputs;
