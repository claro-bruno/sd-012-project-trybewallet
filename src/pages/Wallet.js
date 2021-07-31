import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <h3 data-testid="email-field">{email}</h3>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
// const mapStateToProps = (state) => ({ personalInputs: state.reducer.personalInputs });

export default connect(mapStateToProps, null)(Wallet);
