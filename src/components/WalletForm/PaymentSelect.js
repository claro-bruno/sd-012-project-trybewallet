import React from 'react';
import PropTypes from 'prop-types';

class PaymentSelect extends React.Component {
  render() {
    const { onChange, value } = this.props;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
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
            { methods.map((method) => (
              <option
                key={ method }
              >
                {method}
              </option>
            ))}
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
