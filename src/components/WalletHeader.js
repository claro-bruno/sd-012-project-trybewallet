import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../images/wallet.png';

class WalletHeader extends React.Component {
  render() {
    const { userMail } = this.props;
    let { totalExpenses } = this.props;
    if (totalExpenses > 0) {
      totalExpenses.reduce((acc, init) => init + acc);
    } else {
      totalExpenses = 0;
    }

    return (
      <header className="wallet-header">
        <div className="logo-container">
          <img src={ wallet } alt="" />
          <h1>Trybewallet</h1>
        </div>
        <span data-testid="email-field">
          {userMail}
        </span>
        <div className="info-container">
          <span data-testid="total-field">{totalExpenses}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  userMail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  userMail: PropTypes.string,
  totalExpenses: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(WalletHeader);
