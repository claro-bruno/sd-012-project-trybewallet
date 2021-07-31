import React, { Component } from 'react';

class Wallet extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <p>Email:</p>
            <p data-testid="email-field">.</p>
          </div>
          <div>
            <p>Total gastos: R$</p>
            <p data-testid="total-field">0</p>
          </div>
          <div>
            <p>Total gastos: R$</p>
            <p data-testid="header-currency-field">`BRL`</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Wallet;
