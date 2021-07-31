import React from 'react';
import { connect } from 'react-redux';
import { string, arrayOf, shape, number } from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    // const fmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => (
      acc + parseFloat(exchangeRates[currency].ask) * parseFloat(value)
    ), 0);
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">
          {total}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

// HeaderWallet.defaultProps = {
//   email: '',
//   expenses: '0',
// };

HeaderWallet.propTypes = {
  email: string.isRequired,
  expenses: arrayOf(shape({
    id: number,
    value: string,
    currency: string,
  })).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
