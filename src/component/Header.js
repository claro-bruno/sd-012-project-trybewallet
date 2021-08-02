import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesas } = this.props;
    return (
      <header>
        <h1>Saturno Wallet</h1>
        <h3 data-testid="email-field">
          Email:
          {email}
        </h3>
        <h3 data-testid="total-field">
          Despesa Total: R$
          {despesas}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.func.isRequired,
};

export default Header;
