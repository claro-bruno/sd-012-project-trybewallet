import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPagamento extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="metodo">
        Método de pagamento
        <select
          name="method"
          id="metodo"
          value={ value }
          onChange={ onChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}
SelectPagamento.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SelectPagamento;
