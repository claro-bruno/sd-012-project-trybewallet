import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div>
          <p>Email:</p>
          <p data-testid="email-field">{ userEmail }</p>
        </div>
        <div>
          <p>Total gastos: R$</p>
          <p data-testid="total-field">0</p>
        </div>
        <div>
          <p>Moeda: R$</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (email) => ({
  userEmail: email.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
