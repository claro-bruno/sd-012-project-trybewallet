import React from 'react';
import PropTypes from 'prop-types';

class PayementsSelect extends React.Component {
  render() {
    const { func, value } = this.props;
    return (
      <label htmlFor="Payment">
        Método de pagamento:
        <select onChange={ func } value={ value } id="Payment" name="Payment">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PayementsSelect.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PayementsSelect;
