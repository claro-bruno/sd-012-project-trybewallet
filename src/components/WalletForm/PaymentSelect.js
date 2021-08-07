import React from 'react';
import PropTypes from 'prop-types';

class PaymentSelect extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            value={ value }
            onChange={ onChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

PaymentSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PaymentSelect;
