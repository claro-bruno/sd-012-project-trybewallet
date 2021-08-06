import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const {
      total,
      tag,
      userEmail,
    } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${userEmail}`}</span>
        <span data-testid="total-field">{`Despesa Total: R$ ${total}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${tag}`}</span>
      </header>
    );
  }
}

Header.propTypes = {
  total: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default Header;
