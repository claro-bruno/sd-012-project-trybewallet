import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <div data-testid="email-field">{ `Email: ${email}` }</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>);
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
