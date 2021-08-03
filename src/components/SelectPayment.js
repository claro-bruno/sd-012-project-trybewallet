import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { onChange, method } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select onChange={ onChange } value={ method } id="method" name="method">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectPayment;
