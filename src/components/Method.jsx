import React, { Component } from 'react';

class Method extends Component {
  render() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method">
        Método de pagamento
        <select data-testid="method">
          {
            methods.map((method, index) => (
              <option key={ method[index] } value={ method }>
                { method }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

export default Method;
