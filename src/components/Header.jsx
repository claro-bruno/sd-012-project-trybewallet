import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { myUserState } = this.props;
    return (
      <section className="header-top">
        <div className="email-currency">
          <span data-testid="email-field">{ myUserState.email }</span>
          <div className="currency-status">
            <span data-testid="total-field">{ `Despesa Total: R$ ${0}` }</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </section>

    );
  }
}

Header.propTypes = {
  myUserState: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
