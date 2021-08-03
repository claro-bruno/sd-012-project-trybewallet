import React, { Component } from 'react';
import propTypes from 'prop-types';

class Method extends Component {
  render() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { onChange, value } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ onChange }
          value={ value }
        >
          {
            methods.map((method, index) => (
              <option key={ index } value={ method }>
                { method }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Method.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Method;
