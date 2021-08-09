import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento
        <select
          id="paymentMethod"
          onChange={ onChange }
          value={ value }
          name={ name }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentMethod;
