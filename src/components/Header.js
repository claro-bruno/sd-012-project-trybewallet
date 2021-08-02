import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Email:
          { email }
        </span>
        <div>
          Despesa Total:
          <span data-testid="total-field">
            { expenses }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};
export default Header;
