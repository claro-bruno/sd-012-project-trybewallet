import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo">Fluxo_</h1>
        <p
          data-testid="email-field"
        >
          {'Usuário: '}
        </p>
        <p
          data-testid="total-field"
        >
          Despesas totais
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

export default Header;
