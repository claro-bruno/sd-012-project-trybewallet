import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCoins } from '../actions';
import walletForm from '../components/walletForm';
import expensesTable from '../components/expensesTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCoinsList } = this.props;
    requestCoinsList();
  }

  totalExpense() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const value = curr.exchangeRates[curr.currency].ask * curr.value;
      acc += value;
      return acc;
    }, 0);
  }

  render() {
    const { userEmail, currencyToExchange } = this.props;
    return (
      <>
        <header>
          <section>
            <div data-testid="email-field">
              {`Email: ${userEmail}`}
            </div>
            <div data-testid="total-field">
              { `Despesa Total: R$: ${this.totalExpense().toFixed(2)}` }
            </div>
            <div data-testid="header-currency-field">
              { currencyToExchange }
            </div>
          </section>
        </header>
        <main>
          <walletForm />
          <expensesTable />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
  currencyToExchange: state.wallet.currencyToExchange,
});

const mapDispatchToProps = (dispatch) => ({
  requestCoinsList: () => dispatch(requestCoins()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
  requestCoinsList: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
