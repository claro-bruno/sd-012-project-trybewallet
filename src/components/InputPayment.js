import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputPayment extends Component {
  render() {
    const { paymentMethod, handleChange } = this.props;
    return (
      <label
        htmlFor="paymentMethod"
        value={ paymentMethod }
        onChange={ handleChange }
      >
        Método de pagamento
        <select id="paymentMethod">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

InputPayment.propTypes = {
  paymentMethod: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
