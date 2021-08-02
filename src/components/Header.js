import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const BRL = 'BRL';

    return (
      <header>
        <span>
          <p data-testid="email-field">
            { `Bem-vindo, ${email}` }
          </p>
          <p data-testid="total-field">
            { `Despesa total: ${0}`}
          </p>
          <p data-testid="header-currency-field">
            {`Câmbio usado: ${BRL}`}
          </p>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
