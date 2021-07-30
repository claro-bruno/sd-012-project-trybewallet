import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <p>
          Email:
          <span data-testid="email-field">{`${email}`}</span>
        </p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field">{` ${0} `}</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
