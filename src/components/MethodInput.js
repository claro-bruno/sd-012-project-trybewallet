import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MethodInput extends Component {
  render() {
    const { handle, value } = this.props;
    return (
      <label htmlFor="method-input">
        Método de pagamento
        <select
          id="method-input"
          name="method"
          onChange={ handle }
          value={ value }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodInput.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default MethodInput;
