import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpense from '../components/AddExpense';
import { actionFetchCurrencies } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email, expenses, editor } = this.props;

    return (
      <>
        <header>
          <h1>Carteira</h1>
          <div>
            <p>
              Usuário:
              {' '}
              <span data-testid="email-field">{ email }</span>
            </p>
            <p>
              Despesa Total:
              {' '}
              <span data-testid="total-field">
                {
                  expenses.reduce((acc, { value, currency, exchangeRates }) => {
                    const convertedValue = Number(value) * exchangeRates[currency].ask;
                    return acc + convertedValue;
                  }, 0).toFixed(2)
                }
              </span>
            </p>
            <p data-testid="header-currency-field">
              BRL
            </p>
          </div>
        </header>
        <div>
          {
            !editor ? <AddExpense /> : <EditExpense />
          }
        </div>
        <ExpensesTable />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(actionFetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  editor: PropTypes.bool.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
