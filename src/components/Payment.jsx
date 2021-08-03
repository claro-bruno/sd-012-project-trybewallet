import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="pay-expense">
        Método de pagamento
        <select
          name="method"
          value={ method }
          id="pay-expense"
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de  débito</option>
        </select>
      </label>
    );
  }
}

Payment.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;

Payment.defaultProps = {
  handleChange: () => {},
  method: '',
};

export default Payment;
