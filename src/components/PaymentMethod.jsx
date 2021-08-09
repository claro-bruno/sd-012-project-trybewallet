import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  render() {
    const paymentType = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { method, onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ onChange }
          className="form-control"
        >
          {paymentType.map((option, index) => <option key={ index }>{option}</option>)}
        </select>
      </label>
    );
  }
}

Payment.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Payment;
