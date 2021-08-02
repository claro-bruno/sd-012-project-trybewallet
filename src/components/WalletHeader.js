import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import './Login.css'

class WalletHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCurrency: 'BRL',
    };
    this.walletHeader = this.walletHeader.bind(this);
  }

  walletHeader() {
    const { selectedCurrency } = this.state;
    const { userEmail, expenses } = this.props;
    const totalValue = expenses
      .reduce((acc, elmnt) => (acc
        + (Number(elmnt.value) * Number(elmnt.exchangeRates[elmnt.currency].ask))
      ), 0);
    return (
      <header>
        <p>BEM-VINDO</p>
        <p>
          {'Usuário: '}
          <span data-testid="email-field">{userEmail}</span>
        </p>
        <p>
          {'Sua despesa total é: '}
          <span data-testid="total-field">{totalValue}</span>
          {' '}
          <span data-testid="header-currency-field">{selectedCurrency}</span>
        </p>
      </header>
    );
  }

  render() {
    const { walletHeader } = this;
    return (
      <>
        { walletHeader() }
      </>
    );
  }
}

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHeader);
