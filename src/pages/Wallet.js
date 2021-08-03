import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { userEmail, expensesTotal } = this.props;

    return (
      <div>
        <header>
          <p
            data-testid="email-field"
          >
            {`Email: ${userEmail}`}
          </p>
          <p
            data-testid="total-field"
          >
            {`Despesa Total: ${expensesTotal}`}
          </p>
          <p
            data-testid="header-currency-field"
          >
            BRL
          </p>
          <section>
            <Form />
          </section>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expensesTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesTotal: state.wallet.expenses
    .reduce((
      acc,
      { value, currency, exchangeRates },
    ) => acc + Number(value * Number(exchangeRates[currency].ask)), 0),
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
