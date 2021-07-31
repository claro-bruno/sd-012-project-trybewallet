import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const BRL = 'BRL';

    return (
      <header>
        <span>
          <h3 data-testid="email-field">
            { `Bem-vindo, ${email}` }
          </h3>
          <h3 data-testid="total-field">
            { `Despesa total: ${0}`}
          </h3>
          <h3 data-testid="header-currency-field">
            {`Câmbio usado: ${BRL}`}
          </h3>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
