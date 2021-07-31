import React, { Component } from 'react';

class Method extends Component {
  render() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      methods.map((method, index) => (
        <option key={ index } value={ method }>
          { method }
        </option>
      ))
    );
  }
}

export default Method;
