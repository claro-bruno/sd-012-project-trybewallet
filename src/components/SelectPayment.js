import React from 'react';
import PropTypes from 'prop-types';

export default class SelectPayment extends React.Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="currency-select">
        Método de pagamento:
        <select
          name="method"
          id="currency-select"
          value={ method }
          onChange={ handleChange }
        >
          <option value="credit">Cartão de Crédito</option>
          <option value="debit">Cartão de Débito</option>
          <option value="cash">Dinheiro</option>
        </select>
      </label>

    );
  }
}

SelectPayment.propTypes = {
  method: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
