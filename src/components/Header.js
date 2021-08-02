import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    const { email } = this.props;
    const amount = 0;
    const currency = 'BRL';
    return (
      <div>
        <p data-testid="email-field">
          Email:
          {email}
        </p>
        <p data-testid="total-field">
          Dispesa Total:
          {amount}
        </p>
        <p data-testid="header-currency-field">{currency}</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
