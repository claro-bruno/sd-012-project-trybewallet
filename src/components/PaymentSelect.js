import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="pagamento">
        Método de Pagamento
        <select value={ value } onChange={ onChange } id="pagamento">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

PaymentSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentSelect;
