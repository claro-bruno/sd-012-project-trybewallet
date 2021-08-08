import React, { Component } from 'react';

class PaymentMethod extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          name="method"
          value={ value }
          id="payment"
          onChange={ onChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default PaymentMethod;
