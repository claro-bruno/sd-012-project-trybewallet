import React from 'react';
import { connect } from 'react-redux';
import { string, arrayOf, shape, number } from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const fmt = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const total = expenses.reduce(
      (acc,
        {
          value,
          currency,
          exchangeRates,
        }) => acc + parseFloat(exchangeRates[currency].ask) * parseFloat(value),
      0,
    );
    return (
      <header
        className="d-flex flex-column flex-md-row
        align-items-center p-2 mb-3 border-bottom shadow-sm"
      >
        <h1 className="my-0 mr-md-auto font-weight-normal">TrybeWallet</h1>
        <div>
          <span className="p-1" data-testid="email-field">{email}</span>
          <span className="p-1" data-testid="total-field">{fmt.format(total)}</span>
          <span className="p-1" data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

HeaderWallet.defaultProps = {
  email: '',
};

HeaderWallet.propTypes = {
  email: string,
  expenses: arrayOf(
    shape({
      id: number,
      value: string,
      currency: string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
