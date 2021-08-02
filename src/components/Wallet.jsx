import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header className="wallet-header">

        <h1>Trybewallet</h1>

        <span data-testid="email-field">
          {email}
        </span>
        <div className="info-container">
          <span data-testid="total-field">{pacoca.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>

    );
  }
}

export default Wallet;
