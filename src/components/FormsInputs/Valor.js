import React, { Component } from 'react';

class Valor extends Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" />
        </label>
      </div>
    );
  }
}

export default Valor;
