import React, { Component } from 'react';
import { func } from 'prop-types';

class ExpensePaymentMethodInput extends Component {
  render() {
    const { handleChange } = this.props;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label
        htmlFor="method-input"
      >
        Método de pagamento
        <select
          id="method-input"
          data-testid="method-input"
          name="method"
          onChange={ handleChange }
        >
          { paymentMethods.map((method) => (
            <option
              key={ method }
            >
              {method}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
ExpensePaymentMethodInput.propTypes = {
  handleChange: func.isRequired,
};

export default ExpensePaymentMethodInput;
