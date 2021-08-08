import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { user, expenses } = this.props;
    let sum = 0;

    if (expenses.length > 0) {
      sum = expenses.reduce(
        (acc, item) => (
          Number(
            item.value * item.exchangeRates[item.currency].ask,
          ) + acc
        ),
        0,
      );
    }
    return (
      <header>
        <div data-testid="email-field">
          { user.email }
        </div>
        <p data-testid="total-field">{ sum.toFixed(2) }</p>
        <div data-testid="header-currency-field">BRL</div>
      </header>);
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  user: PropTypes.shape.isRequired,
  expenses: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
