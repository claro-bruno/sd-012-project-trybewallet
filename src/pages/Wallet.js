import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;

    return (
      <div id="wallet-header">
        <header>
          <h1>TrybeWallet</h1>
          <h3 data-testid="email-field">
            Email:&nbsp;
            {userEmail}
          </h3>
          <h3 data-testid="total-field">
            Despesa total: R$ 0
          </h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
