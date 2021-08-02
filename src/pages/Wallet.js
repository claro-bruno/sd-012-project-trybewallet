import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <div>
          Email:
          <span data-testid="email-field">
            email@.com
          </span>
        </div>
        <div>
          Despesa Total:
          <span data-testid="total-field">
            0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

export default Wallet;
