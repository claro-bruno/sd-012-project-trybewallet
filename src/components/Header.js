import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, allExpenses } = this.props;
    return (
      <header>
        <p>
          E-mail:
          <span data-testid="email-field">
            { email }
          </span>
        </p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field">
            { Math.round(allExpenses * 100) / 100 }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  allExpenses: PropTypes.number.isRequired,
};

export default Header;
