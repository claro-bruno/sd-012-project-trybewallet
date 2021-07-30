import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ getEmail }) => (
  <header>
    <p data-testid="email-field">{getEmail}</p>
    <p>
      Despesas total:
      <span data-testid="total-field"> 0</span>
      <span data-testid="header-currency-field"> BRL</span>
    </p>
  </header>
);

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
