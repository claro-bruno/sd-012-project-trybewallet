import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ userEmail }</h3>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(HeaderWallet);

HeaderWallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
