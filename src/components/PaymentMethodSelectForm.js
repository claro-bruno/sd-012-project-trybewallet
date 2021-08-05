import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethodSelectForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="paymentMethod-select">
        Método de pagamento
        <select
          id="paymentMethod-select"
          name="method"
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

PaymentMethodSelectForm.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default PaymentMethodSelectForm;
