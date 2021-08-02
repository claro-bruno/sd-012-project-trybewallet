import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  render() {
    const { payment, handleChange } = this.props;
    return (
      <label htmlFor="pay-expense">
        Método de pagamento
        <select
          name="payment"
          value={ payment }
          id="pay-expense"
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Payment.propTypes = {
  handleChange: PropTypes.func,
  payment: PropTypes.string,
}.isRequired;

Payment.defaultProps = {
  handleChange: () => {},
  payment: 'Dinheiro',
};

export default Payment;
